# Changelog

Changes to how the Album Club Crate site works. Weekly album updates, corrections to past weeks and changes to the Show & Tell rotation are data, not features, so they aren't listed here.

The site's own Release notes section shows only the two most recent versions. This file keeps all of them.

## v2.1 · Nov 26, 2026

- **Missed some since you joined?** A fold under the catch-up list shows every club album from your join week on, ticked. Untick one you haven't heard and it joins your catch-up list, shows as a hollow square on the grid, counts against Your numbers and can come up in Pick one for me. Ticking it later counts as catching up. This works for day-one members too, who used to have nothing to tick. Crate links and codes carry the unticked albums between devices.

## v2.0 · Nov 23, 2026

- **Warm "liner notes" look:**
  - Cream paper background with a faint grain, and soft ivory cards with rounded corners and gentle shadows.
  - Fraunces serif for headings and big numbers.
  - Italic serif labels instead of the monospace all-caps ones.
  - Burnt orange (#c4552a) and mustard (#eeb03b) replace the blue and bright yellow.
  - Dark mode is warm espresso.
- **New log layout:**
  - Weeks are grouped under month headings.
  - Each week is its own card, with "Week 29 · Nov 16–22" in the header.
  - Album rows have bigger covers, the title over the artist, and one line for year and rank.
  - A week's two albums sit side by side on computers.
  - Show & Tell weeks get a mustard edge and a tag.
- **Realistic tonearm:** a ribbed counterweight, chrome pivot on a base plate, a polished tube with a gentle bend, an angled headshell with finger lift and cartridge, and an arm rest. The shadow deepens as the arm lifts.
- **Colored vinyl:** when the needle drops, the record takes on the album cover's main colors as a splatter, swirl or split variant (the same style every time for a given album), and fades back to black when the arm lifts.
- **Projected finish** is a specific week: the tile shows the month and year with "projected finish: week N, the week of …", worked out week by week (two list albums a week, one in Show & Tell weeks). The intro line names the same week.
- **Phone polish:**
  - This week's cards use a smaller cover so titles get more room.
  - Log rows stack rank above year so titles don't wrap early.
  - Show & Tell and Off-list tags sit on their own line as soft pills.
  - The catch-up list shows 8 at a time, with a Show all button.
  - Rotation names wrap instead of getting cut off.
  - The leftover all-caps labels became italic serif.
  - Swipe rows fade at the edge, with a "Swipe for more" hint.
- **Rocco label:** the record's default Album Club label has a screen-print portrait of Rocco (`img/rocco.png`) popping out of a burnt-orange circle, with "The Crate · Album Club · 33⅓" curved along the bottom.
- **Rocco cheers:** catch-up cheers come with a Rocco sticker that pops up and wiggles on the message: sitting, peeking over a pillow or napping, with some lines of his own. Halfway, the last three, every tenth album and fully caught up get party-hat Rocco, and so does the milestone banner (the Confetti! button makes him wiggle). Stickers are `img/rocco-*.webp`.
- **Turntable Easter egg:** a hard flick (or a few full turns) of the record while the needle is up drops the arm by itself and plays the "Never Gonna Give You Up" preview, with Rick Astley's cover on the label and matching colored vinyl. The page's release notes only hint at it.
- The turntable deck has a walnut wood-grain finish (`img/wood.jpg`), the home-screen icon is a black record with a burnt-orange label on mustard, and the link-preview card (`preview.png`) uses the new palette and serif.

## v1.9 · Nov 23, 2026

- **Automatic-turntable tonearm:** tapping the arm raises it, swings it slowly over the record (about 2 seconds) and lowers it. The music starts when the needle lands. Lifting stops the sound at once, then the arm rises and swings home.
- **Softer turntable crackle:** a few gentle pops a second over a faint hiss instead of heavy static, and it drops even lower once the song starts.
- **Jump menu:** a sticky row of links (This week · My crate · Stats · Turntable · Log) that highlights the section on screen. In home-screen mode the ↻ refresh button sits in it.
- **Shorter log:** the last four weeks show, with a Show all weeks button for the rest.
- **Phone layout:**
  - Stat tiles go three across, and a seventh tile spans the row.
  - The % sticker sits beside the intro.
  - The release-year chart groups dots by decade, so they're big enough to tap.
  - Fun facts and Show & Tell picks become swipeable rows.
- **Show & Tell picks** are a single scrolling row on every screen (newest first), with ‹ › arrows on computers once the row overflows.
- **Log:** off-list albums get an OFF-LIST tag under the artist instead of "off-list" squeezed into the rank column.
- **Home-screen bar:** one slim line; tap How for the steps.
- **Release notes:** older versions fold behind "Earlier".

## v1.8 · Nov 23, 2026

- **Show & Tell picks gallery:** every off-list pick with its cover, picker and month.
- **Milestones:** badges for what the club has hit (albums heard, share of the list, top-10 albums) and a progress bar to the next one. When a week pushes the club past a milestone, a banner and confetti celebrate it, once per device.
- **Your numbers:** for someone catching up, the headline numbers, the % sticker, coverage by list position and the release-year timeline count only what they've heard: the club's albums from their join week on, plus everything they've ticked off. A Your numbers / Club numbers switch flips back to the club view.
- **Album birthdays:** a Fun facts card naming club albums with a release anniversary this week, or the next one coming up. It uses Apple Music release dates only when their year matches the album's original year, so remaster dates are ignored.
- **Club Wrapped:** a year-in-review card that appears every December and January, with a Share button. Preview it any time with `?wrapped`.
- **Add to Home Screen:** app icon, name and web app manifest, so the Crate opens like an app from a phone's home screen. A bar pinned to the bottom of the screen shows how, tailored to iPhone, Android or desktop, with a one-tap Install button where the browser supports it. It disappears whenever the Crate is opened from the home screen.
- **Coming up (organizer only):** `?ahead` opens a passphrase-locked section with upcoming weeks, their covers and listen links. The weeks are stored encrypted in `ahead.json`, and a week drops off automatically once it becomes this week.
- **Staying fresh on the home screen:** in home-screen mode there's pull-to-refresh and a ↻ button, and whenever the page comes back into view it checks GitHub for a newer version and offers a "New on the Crate · Refresh" bar. Refreshing skips the phone's saved copy.
- **Catch-up cheers:** ticking off a catch-up album (or Mark as heard) shows a motivational message with a small confetti burst, with bigger moments at halfway, the last three, every tenth album and fully caught up.
- A small "Brought to you by Nathan Schomburg" credit at the bottom of the page.
- **Move your crate** folds away behind its heading (closed by default, remembers your choice), and got a cleaner layout: a Send card with one-tap Copy my crate link (opening the link on another device loads your progress), and a Receive card that accepts a link or an older code.
- Opening the site with `?code=<crate code>` loads that progress automatically. The old claude.ai page's button uses this to carry everyone's progress over.
- **Fixed:** hidden sections could still show on the GitHub version of the page.
- The home-screen icon has a yellow background and a bright blue record label, so it stands out on dark and light home screens alike.
- The browser-tab icon has a light rim and lighter grooves in dark mode, so it stands out on dark tab bars.

## v1.7 · Nov 23, 2026

- **New home:** the site moved from a claude.ai page to GitHub Pages at https://theburg51.github.io/album-club-crate/. The old page shows a "we moved" banner. People bring their catch-up progress over with Copy my code / Load code.
- **Album covers** in the log, on the 500 grid and in the catch-up list. Tapping a grid square shows its cover. Covers come from Apple Music in each visitor's browser and are cached there. A search fallback only accepts an exact title, or the title plus an edition note, so it never grabs a different album.
- **Cover check view:** open the page with `?covers` to see every album's cover and where it came from: Apple Music ID, search match, ID not in the US store, or no cover.
- **Link preview:** sharing the link shows a preview card (`preview.png`) with progress and this week's albums. `tools/preview.cjs` rebuilds it.
- **Pick one for me:** a random-album picker in Your crate for people catching up, with a Mark as heard button.
- **Turntable:** a record you can drag and flick. Dropping the needle plays a 30-second Apple Music preview of a random club album, with a needle thump and vinyl crackle. While it plays, holding the record stops the music and spinning it changes the speed and pitch, with a scratch sound. The record shows an Album Club label until the needle drops.
- **Layout:**
  - This week's albums get their own large section at the top.
  - The Show & Tell banner is a slim strip, with the full rotation folded behind "See the full rotation".
  - The turntable sits above the log.
  - The log no longer repeats the current week.
- **Small things:** a record icon for the browser tab, and the page code trimmed to about 28 KB.
- **Fixed:**
  - Turntable audio stuttering, because playback speed was nudged every frame.
  - The arm lifting before a second album's preview started.
  - iPhone silent mode muting the turntable's sound effects.

## v1.6 · Nov 3, 2026

- **Move your crate between devices:** copy your code in Your crate and load it on another phone or computer.
- Album titles and artists use one consistent format throughout.
- Off-list albums are marked OFF-LIST in the catch-up list.
- Apple Music links go straight to the album when an Apple Music ID is known.

## v1.5 · Oct 19, 2026

- Album titles in the log link to Spotify or Apple Music. Visitors pick their service at the top of the log and the page remembers it.

## v1.4 · Oct 19, 2026

- **Your crate:** pick the week you joined to get your own catch-up checklist. Hollow squares on the grid show list albums you still have to hear.
- A release-year timeline, with one dot per album, replaces the decade bars.
- A projected finish date for the full 500.
- Release notes on the page. The site started updating weekly on its own.

## v1.3 · Oct 19, 2026

- Album history backfilled for Weeks 1–24 (data only; no feature changes).

## v1.2 · Oct 19, 2026

- **Show & Tell banner:** whose turn is next, and the full rotation by seniority.
- The April warm-up albums from before Week 1 are part of the log.

## v1.1 · Oct 18, 2026

- The year and rank columns in the log line up.
- The Show & Tell tag only appears on off-list picks, per the rules.

## v1.0 · Oct 18, 2026

- **Launch:** the 500-slot grid, headline numbers, coverage by list position, fun facts and the week-by-week log.
