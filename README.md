# Molecule Study

A personal flashcard library for BIOL 112, CHEM 121 and BIOL 121, with Supabase sign-in and automatic progress syncing between a phone and Mac.

- 359 flashcards across sixteen sets and 187 scored questions, with original study diagrams.
- Course and set mastery rings, plus structure-and-information popovers on highlighted answer terms.
- BIOL 112 follows Unit 1 / Unit 2 and Modules 1-1 through 2-6. The teacher’s complete supplied requirements are archived verbatim and quoted at each level.
- 277 cards have structure-reference diagrams; all 276 earlier question/answer texts and card IDs are preserved. Lecture 2–10 adds 75 distinct cards, including Module 1-2 growth curves. Existing cards do not imply complete objective coverage.
- Protein cards are in Module 2-5; the 46 transport cards are in Module 2-4.
- Animated front/back cards, drag/swipe recall, favorites, and wrong-question practice.
- Email + password registration and sign-in, without email links or verification codes. Each account has private study data protected by database row-level security.
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

To exercise the authenticated AI tutor locally, add an OpenAI API key to the ignored `.env.local` file, then run the Vercel development server so its `/api/ai/study` function runs too:

```sh
npx vercel dev --listen 3000
```

Sign in to the app, open a flashcard, and use **Ask AI**. The standard `npm run dev` command is still useful for frontend-only work but does not execute Vercel API functions. AI text and optional diagram requests are sent only after a signed-in user explicitly asks. `OPENAI_API_KEY` stays server-side; never prefix it with `VITE_`.

```sh
npm test
npm run build
```

The hosted app opens at an email + password account sign-in page. Without Supabase configuration it shows a setup error instead of allowing unsynced study. Local development without configuration can use guest mode. `?qa=1` isolates guest test progress and disables cloud connections.

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
4. Add `OPENAI_API_KEY` as a server environment variable in Vercel. The Supabase URL and publishable key above are also used server-side to validate the signed-in session; the OpenAI key is never sent to the browser. Optional model overrides are `OPENAI_STUDY_MODEL` and `OPENAI_IMAGE_MODEL`.
5. In Supabase → Authentication → Sign In / Providers, keep Email authentication and new user registration enabled, and turn **Confirm email OFF**. Save. The app checks the public Auth settings before registering and refuses to submit a signup while email confirmation is enabled or cannot be checked.
6. In Supabase → Authentication → URL Configuration, set **Site URL** to `https://flashcard-three-omega.vercel.app` and the exact allowed redirect to `https://flashcard-three-omega.vercel.app/`. Password sign-in stays on the current site; these settings also avoid localhost destinations for older links.
7. Open the deployed site. New users choose **Create account**, enter an email and a password of at least 8 characters, then confirm the password. Existing users choose **Sign in**. Use the same email and password on your phone.

Ask AI is a right-side overlay on desktop and a full-screen sheet on small screens. It snapshots the current card and supplies its course hierarchy, Learn/Apply mode, source citations, and associated teaching notes. The server verifies the Supabase bearer token, limits request size and frequency, and owns the fixed tutor instructions. Diagram generation is explicit and on demand. Generated diagrams are AI study aids; check exact molecular structures against course sources. No card progress or notebook data is sent to the model.

This is the owner's requested no-email setup: email addresses are account identifiers and their ownership is not verified. Registration and password sign-in do not depend on SMTP or an inbox. The app does not call OTP, resend, or password-reset-email endpoints. Passwords are handled by Supabase Auth, never added to progress records or backups. Session tokens are persisted by the Supabase SDK to keep the browser signed in.

If an account previously used magic links and is still signed in on another device, use **Account & sync → Set / change password** on that device. A forgotten password or an older unconfirmed account needs an administrator reset/confirmation; do not delete the account or its study data to fix access. There is no email recovery button. Changing the setting does not automatically set passwords or confirm existing users. Project-level security notification emails, if separately enabled by the owner, are controlled by Supabase.

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

- [Supabase password-based sign-in](https://supabase.com/docs/guides/auth/passwords)
- [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Vite deployment to Vercel](https://vite.dev/guide/static-deploy.html#vercel)

## Content audit (2026-09-27)

See [all 516 card decisions](docs/CARD_AUDIT.md) or the searchable `docs/CARD_AUDIT.html`. `src/library.js` is the reviewed source of truth; do not regenerate it using the earlier pre-audit content generators. `src/card-migrations.js` redirects merged IDs while preserving review history.

## Protein prereading set

BIOL 112 → Unit 2 → Module 2-5 → Proteins contains 38 cards, including the September 27 prereading and September 28 comparisons. The [September 27 record](docs/PROTEINS_SEPT27.md) documents the original 30-card addition. All existing card IDs stay stable.

## Navigation and mastery progress

BIOL 112 follows the supplied Unit / Module hierarchy. The sidebar preserves the complete module titles, and each module links to its exact teacher requirements. Every set shows known / total cards and a circular indicator: red below one third, yellow below 80%, green below completion, and a green star at 100%. A wrong answer or Forgot lowers progress; opening or favoriting a card does not raise it. Card IDs and cloud history are preserved when cards move between sets. Progress measures existing-card mastery, not coverage of every syllabus objective.

## Lecture PPT integration (2026-10-03)

All nine supplied PDFs (319 pages) were read. [Integration and all new cards](docs/LECTURE_INTEGRATION.md) records sources, exclusions and course-specific conventions. The central syllabus dialog opens original lecture requirements as rendered SVG pages, preserving teacher wording and layout. Card backs show one-based PDF source pages. No full PDF, cloud state, credentials or database changes are uploaded by this update.

## Course mistake notebooks

Each course has a new **错题本** with four views over one question collection: 全部 / 按章节 / 按共性问题 / 待复习. New Test errors enter automatically; manual question entry, shared cross-chapter summaries and filters are supported. Open a question for focused review: original prompt/screenshots → reveal answer → correct/incorrect with optional reflection → save and next. Dated results stay under that question; older notes are collapsed. No replacement illustration is inferred. The original forgotten-card view is now **未记牢卡片**, with its existing records preserved. See [notebook behavior and sync validation](docs/NOTEBOOK.md). No database migration is required.

## BIOL 121 vocabulary

Genetics → Genetics vocabulary contains four supplied terms: Polygenic trait, Genetic locus, Genome and Pedigree. Definitions are preserved verbatim in cards and docs/BIOL121_VOCABULARY_ORIGINAL.json. Matching Test questions, a separate course mastery indicator, favorites, review progress, exports and course notebook support are included. Locus and pedigree cards use small illustrative diagrams only on the answer side.
