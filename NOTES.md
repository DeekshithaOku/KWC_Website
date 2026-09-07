# Figma Audit — Kids Who Code (KWC) Website

Source file: https://www.figma.com/design/a8Av8ZK8SJo8ab45kxfml1/KWCWebsite
Audited: 2026-09-07

## Brand

- Club name: **Kids Who Code (KWC)** — teaches coding to kids; site serves both public visitors and the exec board.
- Voice/aesthetic: playful, hand-illustrated, kid-friendly. Sky-blue background with clouds, grass hills, a windmill/pinwheel and a rocket as recurring decorative elements.
- Core visual metaphor: the whole site content area is styled as a **spiral-bound notebook page** — white paper card with horizontal ruled lines, a red vertical margin line, and a spiral binder connecting it to the nav tabs above (which look like binder tabs/dividers).
- Logo lockup: gear icon containing "KWC", paired with a hand-styled "kids WHO code" wordmark (mixed weights/casing, not a single system font — likely needs to be built as a custom SVG/graphic rather than live text).

## Pages / sitemap

| Page | Path (proposed) | Content type | Notes |
|---|---|---|---|
| Home | `/` | Static | Hero lockup, tagline, "Join Us" CTA, social/contact icon row |
| Trips | `/trips` | Embedded (tabbed) | 4 sub-tabs: **Calendar, Sign Up, Service Hours, Attendance** — each embeds a live Google Workspace doc via iframe (Calendar → Google Calendar embed, Sign Up → Google Form, Service Hours → Google Form or Sheet, Attendance → Google Sheet). Confirmed approach: real embeds, no custom backend. |
| Lessons | `/lessons` | Static + seasonal toggle | Spring/Fall tab switcher, 6-card grid per season (currently empty placeholders in Figma — content not filled in yet). References Scratch (MIT's block-coding platform) — lessons are Scratch-based. |
| E-Board | `/e-board` | Static (data-driven) | 6 member-card slots (photo frame + name + role, alternating light/dark card styling). No names/photos populated in Figma yet — will need that content before building the real page. |
| About | `/about` | Static | Currently blank ruled paper in Figma — no content blocks laid out yet. Flag with the club: what should this page say? |

Nav order (all pages): Trips → Lessons → E-Board → About, plus Home via the logo. Same nav appears on every page ⇒ build once as a shared component.

## Repeated components (→ React components)

- `Navbar` — the 4 pill tabs clipped to the spiral binder, consistent across every page.
- `PageFrame` / `NotebookPaper` — the ruled-paper card wrapper with the red margin line; every page's content sits inside this.
- `ContactIconRow` — Instagram, Discord, Gmail, + one more icon (need to confirm which app — greenish, not yet identified).
- `JoinButton` — the "JOIN US!" CTA on Home.
- `TripsTabs` — sub-nav for Calendar/Sign Up/Service Hours/Attendance, each rendering an `<iframe>`.
- `SeasonToggle` — Spring/Fall switch on Lessons.
- `LessonCard` — one per lesson, grid of 6 per season.
- `BoardMemberCard` — photo + name + role, 6 instances on E-Board.
- Decorative background elements (clouds, grass, windmill, rocket) — likely one `SiteBackground` component reused across pages, or baked into `PageFrame`.

## Design tokens (approximate — confirm exact hex via Figma Inspect mode before finalizing in Tailwind config)

- Background sky: light blue (~`#7EC8E3`–`#8FD3EA` range)
- Grass/hills: green (~`#7CB955` range)
- Nav — Trips tab: blue (~`#59AEE0`)
- Nav — Lessons tab: pink/magenta (~`#EC5FA0`)
- Nav — E-Board tab: green (~`#8FCB6B`)
- Nav — About tab: orange (~`#F2A93B`)
- Paper card: white, with light blue rule lines and a red/pink margin line
- Typography: rounded, bold, friendly sans-serif for nav labels and UI text; the "kids WHO code" wordmark looks custom/illustrated rather than a live font — export as SVG rather than trying to recreate it in a web font.

## Assets to export from Figma

- Logo lockup (gear + "KWC" + "kids WHO code" wordmark) → SVG
- Decorative illustrations: clouds, grass/hills, windmill, rocket, character illustrations → SVG (or PNG if they have raster detail/gradients)
- Social icons (Instagram, Discord, Gmail, 4th icon TBD) — likely fine to use standard icon packs instead of exporting Figma's copies, confirm during build

## Open questions for the club / before Phase 4 (page-building)

1. What's the 4th social/contact icon (next to Instagram, Discord, Gmail)?
2. Lessons content (Spring + Fall, 6 slots each) isn't filled in yet in Figma — need real titles/descriptions before building the page, or build with placeholder content to swap in later.
3. E-Board: need actual member names, roles, and photos for the 6 slots.
4. About page has no content laid out yet — what should it say?
5. Confirm the specific Google Workspace links/embed codes for each Trips sub-tab (Calendar, Sign Up form, Service Hours doc, Attendance sheet) once those docs exist for real.
