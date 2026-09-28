# Molecule Study

A personal flashcard library for BIOL 112 and CHEM 121, with Supabase sign-in and automatic progress syncing between a phone and Mac.

- 516 flashcards across eight sets, 187 scored questions, and 38 original diagrams.
- Animated front/back cards, drag/swipe recall, favorites, and wrong-question practice.
- Email sign-in. Each account has private study data protected by database row-level security.
- An immutable review log keeps separate reviews from separate devices. Retries do not count twice.
- Changes sync after a short debounce, every 15 seconds while open, when the window regains focus, and after reconnecting.
- Network interruptions keep an outbox on the device. Reopen while connected to finish syncing.
- Last cloud-received change wins for simultaneous favorite or active-test changes. Avoid taking the same test on two devices at once.

## Local development

```sh
npm ci
cp .env.example .env.local
npm run dev -- --port 3000
```

Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. These are browser-safe values. Never use a Supabase secret/service-role key or database password in the frontend.

```sh
npm test
npm run build
```

Without Supabase configuration, the app works in guest mode and explains how to enable sync. `?qa=1` isolates guest test progress and disables cloud connections.

## Supabase setup

The **Molecule Study** project is already provisioned in the **learniverse.ai** organization, in `us-west-1`. Its URL is `https://ttmabziytocemzfbeszh.supabase.co`.

[Open the Supabase dashboard](https://supabase.com/dashboard/project/ttmabziytocemzfbeszh). The migration below has already been applied to this project; do not run it again. Database tests verified account isolation, anonymous-access restrictions, and idempotent retries. The security advisor reported no findings.

For a different, empty Supabase project, apply `supabase/migrations/202609270001_study_sync.sql`. It creates:

- `study_events`: append-only reviews, favorite changes, active-test snapshots, and results.
- `study_baselines`: a one-time import of progress from the original offline app.
- `append_study_events` and `import_study_baselines`: authenticated, idempotent database functions.

Both tables enforce `auth.uid() = user_id` and grant no anonymous data access. The frontend needs only the publishable API key. No privileged key belongs in GitHub or Vercel's frontend variables.

## Deploy to Vercel

1. Import this GitHub repository into Vercel. Keep the repository root as the project root.
2. Use the **Vite** preset, build command `npm run build`, and output directory `dist` (also in `vercel.json`).
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` as environment variables. Redeploy if you change them after building.
4. After Vercel gives you the final HTTPS address, open Supabase → Authentication → URL Configuration. Set **Site URL** to that address and add `https://YOUR-SITE.vercel.app/` to **Redirect URLs**. Use exact trusted deployment URLs.
5. On the deployed site, choose **Sign in to sync**, enter your email, and open the emailed sign-in link in the same browser. Repeat with the same email on your phone.

Supabase's default email service may limit recipient addresses and sending rates. For a personal app, use the Supabase account owner's email; if other users need access, configure a custom SMTP provider in Supabase. No email provider or paid plan is created by this repository.

## Bring over existing progress

The original `Course_Practice.html` stays unchanged. Browser storage cannot automatically move from a local file to an HTTPS website.

1. In the original Mac file, use **Study guide & backups → Export progress**.
2. Sign in to the hosted app.
3. Use **Study guide & backups → Restore backup**, selecting that JSON file.
4. Sign in with the same email on your phone. The imported progress syncs automatically.

Imports fill missing cards and preserve existing cloud card progress. Guest progress created on the hosted app can be imported using **Account & sync → Import this device's guest progress**. Account caches and guest progress are kept separate.

## Source material

BIOL cards use the supplied September 18 and 21 course notes and study brief. CHEM cards use the supplied VSEPR tables. Approximate course-table bond angles are labelled as such; they are not presented as exact measured angles for every molecule. Diagrams are original schematics.

## Technical references

- [Supabase passwordless sign-in](https://supabase.com/docs/guides/auth/auth-email-passwordless)
- [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Vite deployment to Vercel](https://vite.dev/guide/static-deploy.html#vercel)
