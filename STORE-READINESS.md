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
| Screenshots `screenshots/desktop-search.png` (1280×800) and `screenshots/mobile-roadmap.png` (750×1334) | ⬜ **George: capture from the live site** — the manifest references them; PWABuilder scores them |
| pwabuilder.com report all green | ⬜ run after screenshots land |
| HTTPS + stable URL | ✅ GitHub Pages (no tunnel needed — no local server) |

## Part 2 — Microsoft Store (do first; free account exists)

| Step | Status |
|---|---|
| Reserve name "MajorMap" in Partner Center | ⬜ George |
| Copy Product Identity values into PWABuilder → Windows → download .msixbundle | ⬜ George |
| Listing: copy from `STORE-LISTING.md`, screenshots, privacy URL, age rating 3+ | ⬜ paste-ready |
| Upload + submit | ⬜ |

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
