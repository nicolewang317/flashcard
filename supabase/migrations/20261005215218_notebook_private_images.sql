insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('notebook-images','notebook-images',false,5242880,array['image/png','image/jpeg','image/webp','image/gif']);

create policy "Notebook images: read own"
on storage.objects for select to authenticated
using (bucket_id='notebook-images' and (storage.foldername(name))[1]=(select auth.uid())::text);

create policy "Notebook images: insert own"
on storage.objects for insert to authenticated
with check (bucket_id='notebook-images' and (storage.foldername(name))[1]=(select auth.uid())::text);
