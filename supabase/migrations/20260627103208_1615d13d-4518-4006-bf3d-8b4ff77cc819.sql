CREATE POLICY "Public can view team photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'team-photos');

CREATE POLICY "Admins can upload team photos"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'team-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update team photos"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'team-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete team photos"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'team-photos' AND public.has_role(auth.uid(), 'admin'));