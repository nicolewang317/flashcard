-- Run against a fresh project after applying the migration. All fixtures roll back.
begin;
insert into auth.users(id,aud,role,email) values
 ('51fb3717-836e-4536-8d0f-2a0000000001','authenticated','authenticated','rls-a@molecule.invalid'),
 ('51fb3717-836e-4536-8d0f-2a0000000002','authenticated','authenticated','rls-b@molecule.invalid');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"51fb3717-836e-4536-8d0f-2a0000000001","role":"authenticated"}',true);
select * from public.append_study_events('[{"event_id":"56ddc01b-0000-4000-8000-000000000001","kind":"favorite","entity":"test-card-a","payload":true,"occurred_at":"2026-09-27T00:00:00Z"}]');
-- The same event ID must not create a second record.
select * from public.append_study_events('[{"event_id":"56ddc01b-0000-4000-8000-000000000001","kind":"favorite","entity":"test-card-a","payload":true,"occurred_at":"2026-09-27T00:00:00Z"}]');
do $$ begin
 if (select count(*) from public.study_events) <> 1 then raise exception 'Duplicate retry was not idempotent'; end if;
 begin
  insert into public.study_events(user_id,event_id,kind,entity,payload,occurred_at) values('51fb3717-836e-4536-8d0f-2a0000000002','56ddc01b-0000-4000-8000-000000000099','favorite','cross-account','true',now());
  raise exception 'Cross-account insert was allowed';
 exception when insufficient_privilege then null; end;
end $$;
select set_config('request.jwt.claims','{"sub":"51fb3717-836e-4536-8d0f-2a0000000002","role":"authenticated"}',true);
do $$ begin
 if (select count(*) from public.study_events) <> 0 then raise exception 'Another account could read private events'; end if;
end $$;
select * from public.import_study_baselines('[{"card_id":"test-card-b","value":{"star":true,"status":"new"}}]');
select set_config('request.jwt.claims','{"sub":"51fb3717-836e-4536-8d0f-2a0000000001","role":"authenticated"}',true);
do $$ begin
 if (select count(*) from public.study_baselines) <> 0 then raise exception 'Another account could read private baselines'; end if;
end $$;
set local role anon;
do $$ begin
 begin
  perform count(*) from public.study_events;
  raise exception 'Anonymous event read was allowed';
 exception when insufficient_privilege then null; end;
 begin
  perform * from public.append_study_events('[]');
  raise exception 'Anonymous RPC execution was allowed';
 exception when insufficient_privilege then null; end;
end $$;
reset role;
rollback;
select 'RLS, account isolation, anonymous access, and idempotent retries passed' as result;
