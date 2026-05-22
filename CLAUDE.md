# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Static HTML/CSS/JS portfolio for Michelle Pink Rejuso, a Virtual Assistant. Deployed on GitHub Pages at `https://themaiava.github.io/portfolio/`. No build step, no framework, no package manager — just files.

## Deploying changes

Every commit to `main` deploys automatically via GitHub Pages. The workflow is always:

```
git add <files>
git commit -m "message"
git push
```

Use PowerShell (not Bash) — this is a Windows machine.

## File structure

- `index.html` — Homepage (hero, By the Numbers, Why Clients Stay, Who I Work Best With, How We Work Together)
- `about.html` — Bio, stats, TestDome MS Excel certificate
- `services.html` — 5 service cards + Tools & Platforms Used section
- `works.html` — 3 case study cards with filter tabs (Systems & Trackers, Data & Research)
- `contact.html` — Formspree contact form + Calendly + availability sidebar
- `journey.html` — AI automation learning tracker (hidden from nav — accessible via secret dot only)
- `style.css` — Single stylesheet for all pages, uses CSS custom properties for light/dark theming
- `js/theme.js` — Dark/light toggle, persists to localStorage, loaded on every page
- `js/nav.js` — Mobile hamburger menu
- `js/script.js` — Scroll fade-in (IntersectionObserver), active nav highlight, tool bar animation
- `js/works.js` — Filter tab logic + scroll fade-in for work cards
- `js/chatbot.js` — Entire MAIA chatbot: keyword matching, answers, and injected HTML/CSS
- `js/cursor.js` — Canvas particle trail on mouse move (respects prefers-reduced-motion)
- `assets/images/` — michelle.png (headshot), lead-research-sample.png, lead-research-workflow.png

## Theming

CSS custom properties on `:root` (light) and `[data-theme="dark"]`. Key variables: `--bg`, `--bg2`, `--bg3`, `--border`, `--accent`, `--accent2`, `--accent-bg`, `--text`, `--muted`. The `data-theme` attribute is set on `<html>` by `theme.js`.

## Nav structure (all pages)

`About · Expertise · Work Samples · Contact`

`journey.html` is intentionally absent from the nav. A secret 8px dot (`<a class="journey-secret-link">`) after the hamburger button provides access. It exists on all 6 pages.

## MAIA chatbot (js/chatbot.js)

Keyword-matching only — no API calls. Two objects: `responses` (keyword arrays per topic) and `answers` (string replies per topic). Topics: greet, services, rates, availability, experience, why, turnaround, timezone, tools, trial, parttime, upwork, confidential, ai, contact, thanks, fallback. Quick-reply suggestion chips: Services, Tools, Rates, Availability, Contact.

## Key content rules

- **Rates**: Never mention a dollar amount anywhere — always direct to discovery call
- **AI automation**: Michelle is practising it, not offering it as a service yet. Mention as learning/building only.
- **Services (5 only)**: Data Entry, Lead Research, PDF Data Migration, Customer Service Support, File & Document Management
- **Tools section on services.html**: Uses `https://cdn.simpleicons.org/{slug}/{hex}` for logos. Hunter.io has no Simple Icons entry — use text badge instead. All `<img>` tags have `onerror` fallbacks.

## Multi-file changes

When the same change needs to go on all pages (e.g. nav, footer), use PowerShell string replacement across all HTML files:

```powershell
$files = @("index.html","about.html","services.html","works.html","contact.html","journey.html")
foreach ($f in $files) {
  $path = "C:\Users\Michelle Pink Rejuso\OneDrive\Desktop\PortfolioNew\$f"
  $content = Get-Content $path -Raw -Encoding UTF8
  $content = $content.Replace($old, $new)
  Set-Content $path $content -Encoding UTF8
}
```

## Memory

Project memory lives at:
`C:\Users\Michelle Pink Rejuso\.claude\projects\C--Users-Michelle-Pink-Rejuso-OneDrive-Desktop-PortfolioNew\memory\`

- `MEMORY.md` — index
- `project_career_plan.md` — full portfolio status, positioning rules, to-do list

Keep memory updated when making significant changes.
