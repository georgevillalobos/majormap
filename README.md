# MajorMap — U.S. College Major Finder & Degree Roadmap

**Live:** https://georgevillalobos.github.io/majormap/

Search 103 U.S. college majors, see every college in your state that offers each one
(live from the U.S. Department of Education's College Scorecard), and follow a guided
course roadmap from Certificate through Doctorate — including trade and professional
paths like Electrician, DVM, MD and J.D.

Free, no sign-up, no tracking, no backend. One HTML file.

## How it works

- **School listings** come live from the [College Scorecard API](https://collegescorecard.ed.gov/data/api/)
  (`api.data.gov/ed/collegescorecard/v1/schools`), matched on each major's 4-digit CIP code.
  Results page through the API (up to 500 schools per search) and sort Bachelor's-granting
  schools first by default; switch to A–Z with the sort chip.
- **API key.** Out of the box the page uses api.data.gov's `DEMO_KEY`, which is rate-limited
  *per visitor IP* (30 requests/hour, 50/day) — so every visitor gets their own budget and
  no shared key is exposed. Heavy users can paste their own free key (⚙ API key, top right);
  it's stored only in that browser's `localStorage` and sent only to api.data.gov.
- **Roadmaps** (high-school prep, intro / core / advanced courses, graduate sequence,
  licensure notes) are hand-written representative sequences in `index.html` under `MAJORS`.
  Exact course names and prerequisites vary by institution — always confirm with the
  college's catalog and an advisor.
- **Connections** (v1.1, in progress): per-major professional associations, student chapters
  and first-job networking moves. The tab appears automatically for any major whose entry
  carries a `conn` field.

## Contributing

Wrong course? Missing major? Open an issue or a PR against `index.html`. Each major is one
object in the `MAJORS` array: `n` name, `cip` 4-digit CIP code, `cat` category, `hs` / `intro` /
`core` / `adv` / `grad` course lists, `lic` licensure note, optional `skip`, `gate`, `prof`, `conn`.

## Running locally

Open `index.html` in a browser. That's it.

## License

MIT for the code. College Scorecard data is U.S. government public domain.

Built by [George Villalobos](https://github.com/georgevillalobos) / PVG Production, with Claude.
