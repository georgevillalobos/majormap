# MajorMap — store readiness (live status doc)

Updated 2026-09-22. Web app live at https://georgevillalobos.github.io/majormap/ · repo `georgevillalobos/majormap` (public).
Pattern: `ship-pwa-to-stores` skill (PWA → Microsoft Store → Google Play → iOS).

## Part 1 — PWA

| Piece | Status |
|---|---|
| `manifest.webmanifest` (id, scope, start_url, display, icons 192/512/maskable, shortcuts, categories, screenshots refs) | ✅ shipped |
| `sw.js` at site root (shell precache, navigate network-first, api.data.gov network-only) | ✅ shipped |
| `pwa.js` (SW register, update toast, install chip, iOS add-to-home hint) | ✅ shipped |
| Icons (192, 512 any, 512 maskable, apple-touch 180, favicon 32) + `icons/og.png` | ✅ shipped |
| `privacy.html` at a public URL | ✅ shipped |
| Screenshots: `screenshots/` — desktop-search, desktop-roadmap, desktop-connections (1280×800); mobile-search, mobile-roadmap, mobile-connections (750×1334) | ✅ shipped (Playwright, API mocked with a CA Nursing fixture so the cards render) — reuse for store forms |
| pwabuilder.com report all green | ✅ 2026-09-22 11:19 — 0 red, 0 yellow, manifest 34/46 |
| HTTPS + stable URL | ✅ GitHub Pages (no tunnel needed — no local server) |

## Part 2 — Microsoft Store (do first; free account exists)

| Step | Status |
|---|---|
| Reserve name "MajorMap" in Partner Center | ✅ 2026-09-22 — Store ID `9NKMSDXQ7Q89`, identity `PVGProduction.MajorMap` / `CN=0C91E156-C622-4063-A9C5-8133CAD0A3CF` / `PVG Production` (also in STORE-LISTING.md) |
| Copy Product Identity values into PWABuilder → Windows → download .msixbundle | ✅ 2026-09-22 — rebuilt with real identity; bundle manifest verified (`PVGProduction.MajorMap`, v1.0.1.0) |
| Listing: copy from `STORE-LISTING.md`, screenshots, privacy URL, age rating 3+ | ✅ 2026-09-22 — 1366×768 `screenshots/store-*.png`, logos in `store-art/` (box art, 9:16 poster, 300/150/71 tiles) |
| Upload + submit | ✅ **Submitted for certification 2026-09-22 ~11:55 AM.** Expect hours to 3 days; listing goes live at https://apps.microsoft.com/detail/9NKMSDXQ7Q89 |

## Part 3 — Google Play

| Step | Status |
|---|---|
| Developer account ($25 one-time, "Yourself") | ⬜ George — money decision under the solvent-first rule |
| PWABuilder → Android (.aab) with package `com.pvgproduction.majormap`; back up keystore | ⬜ |
| `.well-known/assetlinks.json` in repo with Play's app-signing SHA-256 | ⬜ |
| Data safety: no data collected · Content rating: Everyone | ⬜ paste-ready |
| Closed test (12+ testers, 14 days) → production | ⬜ |

## Part 4 — iOS

Blocked on: Apple Developer account ($99/yr) + Mac with Xcode. Plan of record is the React Native/Expo rebuild in `MAJORMAP-VIDEO-BRIEF.md`, not the PWABuilder wrapper. iPhone users can install the PWA today from Safari.

## Verified this session

- CA Nursing search: 174 schools across 2 API pages (paging works; previous build capped at 100).
- Connections: 103/103 majors; 365 org URLs link-checked from the PC — 298 returned 200, ~55 returned 403/302 (bot-protected or redirecting, sites alive), 10 broken links replaced or removed.
- All scripts pass `node --check`; manifest is valid JSON.
