# Album Club Crate

The Album of the Week Club's progress through Rolling Stone's 500 Greatest Albums of All Time (2023 edition).

**Live site:** https://theburg51.github.io/album-club-crate/

## How the club works

- Two albums a week from the list. Weeks start on Mondays, and Week 1 started May 4, 2026.
- **Show & Tell:** the first week of each month, whoever's turn it is picks one album that isn't on the list, alongside one regular pick. Turns go by seniority.

## What's in the repo

| File | What it is |
| --- | --- |
| `index.html` | The whole site in one page: data, styles and script. |
| `preview.png` | The image shown when the link is shared in a chat. |
| `tools/preview.cjs` | Rebuilds `preview.png` and the preview text from the page's data. Run `node tools/preview.cjs` from the repo root (needs Playwright). |
| `tools/fonts/` | Fonts used to render the preview image. |
| `manifest.webmanifest`, `icons/` | App name and icons for Add to Home Screen. |
| `ahead.json` | Upcoming weeks, encrypted (AES-GCM, passphrase-derived key). Unreadable without the passphrase. |
| `tools/ahead.cjs` | Rebuilds `ahead.json`: `AHEAD_PASS='…' node tools/ahead.cjs < upcoming.json`. Never commit `upcoming.json`. |
| `CHANGELOG.md` | Every version of the site and what changed. |

## Where the data lives

Everything is near the bottom of `index.html`:

- `rotData`: the Show & Tell rotation, who's up next and their month.
- `R`: every album heard, one per line: `[week, "title", "artist", year, rank, "appleMusicId", "showTellPicker"]`.
  - `rank` is the 2023 list rank, or `-1` for an album that's not on the list.
  - `appleMusicId` must be a **US store** ID. It drives the cover, the Apple Music link and the turntable preview.
- `NEXT`: this week's albums, shown big at the top of the page.
- `picks`: each person's Show & Tell album.
- `NOTES`: the release notes shown on the page, the two most recent versions only.

## Weekly updates

A scheduled Claude task runs every Monday morning. It picks and sends the albums of the week, moves last week's albums into the log, sets this week's albums, refreshes the link preview, and pushes to `main`. GitHub Pages republishes within a few minutes. An album never appears before its week starts.

## Handy links

- `?covers`: check every album's cover and where it came from.
- `?wrapped`: preview Club Wrapped outside December and January.
- `?ahead`: the organizer's passphrase-locked look at upcoming weeks. Nothing shows without the passphrase.

## Rules for changes

- The page shows group progress only: no one's personal ratings or opinions.
- Release notes, here and on the page, cover changes to how the site works, never album, people or data updates.
- Visitors' own progress (join week, catch-up ticks, streaming service) stays in their browser. Nothing is sent anywhere.
