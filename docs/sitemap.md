# Sitemap — Kids Who Code (KWC) Website

Source design: https://www.figma.com/design/a8Av8ZK8SJo8ab45kxfml1/KWCWebsite

## Pages

- **Home** (`/`) — hero, mission tagline, join CTA, social links. Static content.
- **Trips** (`/trips`) — tabbed: Calendar, Sign Up, Service Hours, Attendance. Each tab embeds a live Google Workspace doc (iframe) — no custom backend needed.
- **Lessons** (`/lessons`) — Spring/Fall toggle, 6 lesson cards per season. Static content, sourced from a local data file so lesson info can be updated without touching component code.
- **E-Board** (`/e-board`) — 6 member cards (photo, name, role). Static content, sourced from a local data file.
- **About** (`/about`) — club description. Static content.

## Shared across every page

- Navbar (Trips / Lessons / E-Board / About tabs + logo linking home)
- Notebook-paper page wrapper (ruled lines, margin line)
- Background illustration (sky, clouds, grass, windmill, rocket)

## Content ownership (static vs. embedded)

| Page | Data source |
|---|---|
| Home | Hardcoded in the component (rarely changes) |
| Trips | Live Google Calendar / Form / Sheet, owned by the club, embedded via iframe |
| Lessons | `src/data/lessons.js` — array of lesson objects, edited by whoever updates the site |
| E-Board | `src/data/board.js` — array of member objects, updated once or twice a year |
| About | Hardcoded in the component |

This split matters for planning: Trips content is managed entirely outside the codebase (by whoever has the Google doc links), while Lessons/E-Board are small data files anyone comfortable editing JSON can update without touching React code.
