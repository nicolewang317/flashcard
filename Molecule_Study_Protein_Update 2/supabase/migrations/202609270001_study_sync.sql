-- Molecule Study: append-only review log and one-time legacy progress import.
create table public.study_baselines (
  user_id uuid not null references auth.users(id) on delete cascade,
  card_id text not null check (char_length(card_id) between 1 and 100),
  value jsonb not null check (jsonb_typeof(value) = 'object' and octet_length(value::text) < 262144),
  created_at timestamptz not null default now(),
  primary key (user_id, card_id)
);
create table public.study_events (
  seq bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  event_id uuid not null,
  kind text not null check (kind in ('review','favorite','test','result')),
  entity text not null check (char_length(entity) between 1 and 150),
  payload jsonb not null check (octet_length(payload::text) < 262144),
  occurred_at timestamptz not null,
  received_at timestamptz not null default now(),
  unique(user_id,event_id)
);
create index study_events_user_seq on public.study_events (user_id,seq);
create index study_events_user_entity on public.study_events (user_id,entity);
alter table public.study_baselines enable row level security;
alter table public.study_events enable row level security;
revoke all on public.study_baselines, public.study_events from public, anon, authenticated;
grant select on public.study_baselines, public.study_events to authenticated;
grant insert(user_id,card_id,value) on public.study_baselines to authenticated;
grant insert(user_id,event_id,kind,entity,payload,occurred_at) on public.study_events to authenticated;
grant usage on sequence public.study_events_seq_seq to authenticated;
create policy "Read own baselines" on public.study_baselines for select to authenticated using ((select auth.uid())=user_id);
create policy "Import own baselines" on public.study_baselines for insert to authenticated with check ((select auth.uid())=user_id);
create policy "Read own study events" on public.study_events for select to authenticated using ((select auth.uid())=user_id);
create policy "Append own study events" on public.study_events for insert to authenticated with check ((select auth.uid())=user_id);

create or replace function public.append_study_events(items jsonb)
returns setof public.study_events
language plpgsql security invoker set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'Sign in required'; end if;
  if jsonb_typeof(items) <> 'array' or jsonb_array_length(items) > 100 then raise exception 'Invalid event batch'; end if;
  -- Per-account serialization makes the sequence cursor safe across concurrent devices.
  perform pg_advisory_xact_lock(hashtextextended(auth.uid()::text, 0));
  return query insert into public.study_events(user_id,event_id,kind,entity,payload,occurred_at)
    select auth.uid(),(v->>'event_id')::uuid,v->>'kind',v->>'entity',v->'payload',(v->>'occurred_at')::timestamptz
    from jsonb_array_elements(items) v
    on conflict(user_id,event_id) do nothing returning *;
end;
$$;
create or replace function public.import_study_baselines(items jsonb)
returns setof public.study_baselines
language plpgsql security invoker set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'Sign in required'; end if;
  if jsonb_typeof(items) <> 'array' or jsonb_array_length(items) > 50 then raise exception 'Invalid import batch'; end if;
  perform pg_advisory_xact_lock(hashtextextended(auth.uid()::text, 0));
  return query insert into public.study_baselines(user_id,card_id,value)
    select auth.uid(),v->>'card_id',v->'value' from jsonb_array_elements(items) v
    where not exists(select 1 from public.study_events e where e.user_id=auth.uid() and e.entity=v->>'card_id' and e.kind in ('review','favorite'))
    on conflict(user_id,card_id) do nothing returning *;
end;
$$;
revoke all on function public.append_study_events(jsonb),public.import_study_baselines(jsonb) from public,anon;
grant execute on function public.append_study_events(jsonb),public.import_study_baselines(jsonb) to authenticated;
