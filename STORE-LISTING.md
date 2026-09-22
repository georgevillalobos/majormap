# MajorMap — store listing copy (paste-ready)

Written 2026-09-22. Package identity is permanent once uploaded — decide it before the first upload.

| Field | Value |
|---|---|
| App name | **MajorMap** |
| Subtitle / tagline | College major finder & degree roadmap |
| Package ID (Play, iOS) | `com.pvgproduction.majormap` |
| Windows Package/Identity/Name | `PVGProduction.MajorMap` (reserved 2026-09-22) |
| Windows Package/Identity/Publisher | `CN=0C91E156-C622-4063-A9C5-8133CAD0A3CF` — same for every app on the account |
| Windows PublisherDisplayName | `PVG Production` |
| Microsoft Store ID / URL | `9NKMSDXQ7Q89` · https://apps.microsoft.com/detail/9NKMSDXQ7Q89 · PFN `PVGProduction.MajorMap_106xw499xpaw8` |
| Publisher | PVG Production |
| Website | https://georgevillalobos.github.io/majormap/ |
| Privacy policy URL | https://georgevillalobos.github.io/majormap/privacy.html |
| Support | https://github.com/georgevillalobos/majormap/issues · gvillalobos132@gmail.com |
| Category | Education (secondary: Reference / Productivity) |
| Price | Free · no IAP · no ads |
| Content rating | Everyone / 3+ / PEGI 3 — no user content, no violence, no ads, no purchases |

## Short description (80 chars, Play) / promotional text

```
Find your college major, the schools that offer it, and the road to get there.
```

## Long description (Microsoft Store, Google Play, App Store)

```
MajorMap helps you pick a college major and see exactly how to get from where you are to a degree in it.

SEARCH 103 MAJORS
Type a major or browse 12 fields — Computing, Health, Engineering, Business, Science, Social Science, Education, Humanities, Arts, Law & Public Service, Trades & Applied, and Agriculture. From Nursing and Computer Science to Electrician, Aviation, Veterinary Medicine (DVM), Medicine (MD/DO), and Law (J.D.).

SEE WHICH COLLEGES OFFER IT — LIVE
Pick your state and MajorMap pulls every college that offers that program straight from the U.S. Department of Education's College Scorecard, with the credential levels each school offers (Certificate, Associate, Bachelor's, Master's, Doctorate). Filter by level, sort by level or A–Z, and jump to each school's website.

FOLLOW THE ROADMAP
Every major has a guided roadmap by degree level: what you need to get in, the course sequence year by year, what you leave with, and the licensing or exam steps for regulated fields. Trade and professional paths (apprenticeships, DVM, MD, J.D., PharmD, DPT) are mapped too.

MAKE THE CONNECTIONS
For each major: the professional associations, unions, and licensing bodies that run the field; the student chapters and competitions worth joining; and the two or three moves that actually get people their first job.

FREE, PRIVATE, FAST
No account, no ads, no tracking. Works offline once installed (school search needs a connection). Built by a facilities tech and side-project builder in the Bay Area who wanted this tool to exist.

Data: U.S. Department of Education College Scorecard (public domain). Roadmaps are representative — always confirm with the college's catalog and an advisor. Not affiliated with the Department of Education or any college.
```

Character counts: Play long description limit 4,000 (this is ~1,900). Microsoft Store description limit 10,000. App Store 4,000.

## Keywords (App Store, 100 chars max, comma-separated)

```
college,major,degree,career,university,nursing,engineering,scorecard,roadmap,apprenticeship
```

## Screenshots to capture (run the live site in a browser, 1280×800 and phone 750×1334 or 1290×2796)

1. Home with the search box and "Or browse by field" grid — the first impression.
2. Results: "Nursing (RN/BSN) in California" with level chips and cards visible.
3. Roadmap: Bachelor's tab for Computer Science (four-year sequence).
4. Roadmap: Electrician with the apprenticeship gate box — shows trades are covered.
5. Connections tab for Nursing (orgs + student chapters + first-job moves).
6. Phone: same as 2 and 5 in narrow layout.

Save as `screenshots/desktop-search.png`, `screenshots/mobile-roadmap.png` (the manifest references these two) plus the rest for the store forms.

## Microsoft Store (first — free individual account, already registered for Prediction Command Center)

- Partner Center → Apps and games → New product → **MSIX or PWA app** → reserve name **MajorMap**.
- Product management → Product Identity → copy the three values into pwabuilder.com → Windows → generate → upload the **.msixbundle** (not the .sideload.msix).
- Properties: Category **Education**. Age rating questionnaire: no user-generated content, no ads, no purchases → **3+**.
- Privacy policy URL: the privacy.html link above. `runFullTrust` capability justification: "Hosted App Model — required for PWAs packaged with PWABuilder."
- Certification: hours to ~3 days.

## Google Play ($25 one-time, "Yourself" account type)

- PWABuilder → Android → Package ID `com.pvgproduction.majormap` → create a NEW signing key → download the .aab **and back up the keystore + both passwords** (non-recoverable).
- Host `.well-known/assetlinks.json` in the repo (PWABuilder gives you the file). After upload, replace the SHA-256 with **Play Console → App integrity → App signing key** fingerprint, or the URL bar won't hide.
- Data safety form: "No data collected, no data shared." Ads: No. Content rating: Everyone.
- Closed testing track first: 12+ testers for 14 days is required for new personal accounts before production.

## iOS (blocked until: $99/yr Apple Developer account + a Mac with Xcode)

- PWABuilder → iOS → download the Swift/WebKit Xcode project. Bundle ID `com.pvgproduction.majormap`.
- Guideline 4.2 (minimum functionality) is the risk for a wrapped web app. Mitigations that are already true: offline app shell, native install, home-screen shortcuts, no login. Strongest argument would be push notifications — not needed for this app, so expect one review round of questions.
- Alternative and the plan of record: the React Native / Expo rebuild in `MAJORMAP-VIDEO-BRIEF.md` is the real iOS app and the video. Don't submit the wrapper if that build is coming within a few months.
- Meanwhile iPhone users install today via Safari → Share → Add to Home Screen (the app prompts them).
