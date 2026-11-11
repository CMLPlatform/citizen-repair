# REPAIR project website

Static website for the REPAIR project (R9Lab). It uses plain HTML, CSS and JavaScript. There is no build step.

The site is in Dutch and English. Dutch is the default. The `EN`/`NL` button in the navbar switches the language. The browser remembers the choice.

## Files

| Path | Content |
|---|---|
| `index.html` | Home page: hero, challenge, project, R9Lab, events teaser, results, partners, contact. |
| `events.html` | Events page: upcoming and previous events. |
| `style.css` | All styles for both pages. |
| `script.js` | Language toggle. |
| `img/hero_iwar.jpg` | Hero background (IWAR 2026 workshop, Delft). Set in `style.css`. |
| `img/events/iwar2026/` | IWAR 2026 photos, resized to 1600 px. |
| `img/partners/` | Partner and funder logos. |
| `img/app.jpg`, `img/ws1.jpg`, `img/hero_demo.jpg` | Other photos in use. |
| `img/r9lab_logo.svg` | R9Lab logo (navbar, footer, favicon). |

## Edit text

Each translated element has two attributes: `data-nl` (Dutch) and `data-en` (English). The script copies the text for the current language into the element. Leave the element itself empty.

```html
<p data-nl="Nederlandse tekst" data-en="English text"></p>
```

- Always change both attributes.
- To put a link inside translated text, write the quotes as `&quot;`. Example: `<a href=&quot;mailto:info@r9lab.io&quot;>info@r9lab.io</a>`.
- Text without `data-nl` and `data-en` (for example names) shows the same in both languages.
- The page title per language is set with `data-title-nl` and `data-title-en` on `<body>` (see `events.html`).

## Add an event

1. Open `events.html`.
2. Copy an `<article class="event">` block into the correct section: `#upcoming` or `#previous`.
3. Change the date, title, place, text and link. Keep the newest event at the top.
4. Choose a badge:
   - `badge up`: upcoming event with a fixed date.
   - `badge tbc`: upcoming event, date not fixed yet.
   - `badge past`: previous event.
5. For photos, resize them before you add them. The originals are too large for the web. On macOS:
   ```sh
   sips -Z 1600 -s formatOptions 72 original.jpg --out img/events/<event>/name.jpg
   ```
   Then add a `<div class="gallery">` with one `<figure><img …></figure>` per photo. Give each image a short `alt` text that describes it.
6. Update the "Coming up" box in the `#events` section of `index.html`.
7. When an event is over, move its block from `#upcoming` to `#previous` and change the badge to `badge past`.

## Add a partner

1. Put the logo in `img/partners/`. Use SVG if possible. Otherwise use a PNG at least twice the display size (about 400 px wide).
2. In `index.html`, copy an `<a class="partner">` block in the `#partners` section. Put it under "Project partners" or "Funding".
3. Change the logo, name, description (`data-nl` and `data-en`), link and visible URL.
4. If needed, update the partner names in the footer of both pages.

## Deploy on GitHub Pages

1. Create a GitHub repository (for example `repair-project`). Push the contents of this folder to `main`.
2. Go to **Settings → Pages → Build and deployment**. Set Source to *Deploy from a branch*, Branch to `main`, and folder to `/ (root)`.
3. The site appears at `https://<user-or-org>.github.io/repair-project/`.

## Before publishing

- `.gitignore` keeps these files out of the repository:
  - original photo folders (`img/Photos-*/`, for example the 33 MB IWAR originals);
  - the unused `img/lab1.jpg` and `img/lab2.jpg`;
  - macOS, editor and Office temporary files.
  
  You can keep these files on disk. Put new original photos in an `img/Photos-…` folder, so that git ignores them too.
- Check that the people visible in `img/hero_iwar.jpg`, `img/events/iwar2026/` and `img/ws1.jpg` agree to be shown.
- Fill in the open event details in `events.html`:
  - The date and place of the REPAIR activity during the Week van de Circulaire Economie (11–19 March 2027).
  - The date of the Reparatie Lab workshop (LDE, "The Future of Repair II").
  - The Brightcon 2025 month. The site says November 2025, but the photos are dated 16 October 2025.
- The contact address is `info@r9lab.io`. It appears in `index.html` (contact section) and `events.html` (intro).
