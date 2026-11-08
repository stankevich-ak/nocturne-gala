# Nocturne Gala

Static website served from the repository root.

## Event cards

Edit `events-data.js` to add events or update dates, locations, images, descriptions, and ticket links. `/events/`, `/spring-gala/`, and `/end-of-summer-picnic/` all use this source through `events-render.js`.

Dates are `YYYY-MM-DD` in America/Vancouver. Events remain upcoming through their event day, then move into Past Events automatically. Set `past: true` to explicitly archive an event. Past-event pages show the nearest two upcoming events in date order, or an announcement message when there are none. Event detail content and its structured metadata remain in each page’s HTML.

Preview from the repository root with `python3 -m http.server 8765`.

## Local generated files

Keep only website source and website assets in this repository. Save photo edits, video exports, previews, reports, and other generated work outside the repository, under `~/Documents/Nocturne Gala Local Files/` or the relevant event folder in `~/Documents/Ball/`. The `outputs/` and `output/` folders are ignored by Git.
