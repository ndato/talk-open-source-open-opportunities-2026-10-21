# Hacktoberfest Cebu 2026 — Open Assembly brand kit

Prepared from the current HF26 website identity on 19 September 2026. These are exportable versions of the site's arrow and two-line wordmark, plus supporting graphics and draft templates. They are the Cebu event identity, not the global Hacktoberfest organization's logo.

## Start with the logo

- `preview/logo-overview.png` shows the primary, reversed, black, and white treatments.
- `svg-outlined/wordmark-primary.svg` is the most portable primary logo: all letters are vector paths, with no font dependency.
- `svg-editable/wordmark-primary.svg` retains live text for applications that support SVG text. Install the supplied fonts first. Figma may convert SVG text to vectors on import; native Figma text components are still pending.
- `png/wordmark-primary@4x.png` is a transparent 1760 × 416 PNG. Every wordmark has both 1× and 4× exports.
- `wordmark-reverse` uses brand paper; `wordmark-mono` uses brand ink. `wordmark-black` and `wordmark-white` are pure monochrome reproduction variants.
- `arrow-*` files are the existing supporting icon, with transparent 128 × 128 and 512 × 512 PNG exports. Pair the icon with the event name when the context does not already identify the event.

Preserve the logo's proportions, spacing, and colors. Use the primary logo on light backgrounds and reversed/white versions on dark backgrounds. Give it room, keep it readable, and avoid busy photos behind it. Do not stretch, add shadows, or replace the typeface. Formal minimum-size and clear-space specifications have not been approved.

## Other assets

`open-door-*` and `year-tile-*` reproduce the site's geometric motifs. The square post, story, and widescreen slide are draft layout templates. `preview/asset-overview.png` is a contact sheet of the actual exports. `brand-tokens.json` contains the source palette and font families; `manifest.json` lists asset dimensions.

Templates use the announced October 3, 10, 18, and 25, 2026 dates. Venues, times, fees, speakers, and partners are not filled in. Review event copy before publishing. This pack has not been published or sent to other people.

## Fonts and source

The `fonts` directory includes Barlow Condensed Bold, DM Sans Regular, DM Sans SemiBold, and their OFL license files, copied from this repository's `public/fonts`. Site sources: `app/globals.css`, `components/site-chrome.tsx`, `.impeccable.md`, and `BRIEF.md`.

## Figma status — incomplete upload

File: https://www.figma.com/design/GVRi4tC99n4xT2JcZHZsuK

Team: JS Cebu. The file contains the brand guide, color variables, and type styles. The Brand Assets and Templates pages are empty: Figma's Starter MCP allowance blocked both screenshots and canvas writes before the logo/components/templates could be added. The cover was visually checked; the other guide boards had their dimensions checked after layout corrections, but final screenshots remain pending. This local pack does not constitute completed native Figma delivery.

After MCP access is restored: inspect the current file, finish guide screenshot checks, add native logo variants and motifs, add the three templates, verify export settings and rendered results, and check team sharing access without changing permissions automatically. `figma-checkpoint.json` records the existing IDs so work can resume without recreating the file.

Validation: exported SVGs are XML-checked; outlined SVGs contain no live text; PNG sizes and transparent logo bounds are checked. Logo variants and the template contact sheet were visually inspected locally.
