# Executive desk portfolio implementation plan

> **For agentic workers:** Implement the tasks in order and verify each change before moving to the next page.

**Goal:** Give the existing portfolio a calm Executive desk visual system and direct contact channels for founders and small-business owners.

**Architecture:** Keep six static HTML pages, one shared stylesheet, and the existing small JavaScript files. Update shared design tokens first, then page hierarchy and copy, then cross-page references and accessibility checks. The contact page uses email, LinkedIn, and Calendly without Formspree.

**Tech Stack:** HTML, CSS, vanilla JavaScript, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-08-executive-desk-portfolio-design.md`

## Global constraints

- Preserve the five current services and factual credentials.
- Never publish rates; direct pricing inquiries to a conversation.
- AI automation is learning and building, not a paid service.
- Keep `journey.html` out of primary navigation.
- Do not invent social profile URLs or availability claims.
- Do not deploy until Michelle reviews the local redesign.
- The folder currently has no `.git` directory, so do not attempt commits or pushes here.

## Review focus

- Mobile navigation remains usable at narrow widths.
- Light and dark theme text remains legible.
- All Contact references lead to email, LinkedIn, or Calendly, with no active Formspree form.
- The five services and three case studies remain intact.
- Reduced-motion users can navigate without automatic page animations.

## Tasks

### Task 1: Direct contact

**Files:** `contact.html`, `style.css`, `index.html`, `services.html`, `js/chatbot.js`

- [x] Replace the Formspree form with direct Gmail, LinkedIn, and Calendly links.
- [x] Update references to the old form and remove its submission script.
- [ ] Verify link targets, keyboard focus, mobile layout, and dark mode.

### Task 2: Shared visual system

**Files:** `style.css`, all HTML pages if typography links change.

- [ ] Apply cream, sand, sage, copper, and espresso tokens to light and dark themes.
- [ ] Refine navigation, page headings, section spacing, buttons, borders, and footer.
- [ ] Reduce decorative motion and add visible focus and reduced-motion rules.
- [ ] Verify CSS structure and responsive behavior.

### Task 3: Homepage

**Files:** `index.html`, `style.css`

- [ ] Replace the code-terminal hero with a concise credibility panel.
- [ ] Lead with operational support for founders, then evidence, fit, and process.
- [ ] Remove stale prominent AI-learning references and tighten unsupported claims.
- [ ] Verify links and all five services remain represented accurately.

### Task 4: Services and work samples

**Files:** `services.html`, `works.html`, `style.css`, `js/works.js` only if needed.

- [ ] Arrange five service cards as three plus two on desktop and stack on mobile.
- [ ] Improve deliverable hierarchy while retaining tools and platform details.
- [ ] Present three case studies with clear problem, work, and outcome hierarchy.
- [ ] Verify filter behavior and sample media labels.

### Task 5: About and learning journal

**Files:** `about.html`, `journey.html`, `style.css`

- [ ] Refine biography, photo, and TestDome credential presentation.
- [ ] Reframe the AI journey as a dated learning journal, not a current service or promised update cadence.
- [ ] Verify confidential-work language and credential link.

### Task 6: Final review

**Files:** all changed files.

- [ ] Search for Formspree, old form instructions, rates, stale claims, and inconsistent service names.
- [ ] Validate HTML structure, JavaScript syntax, CSS braces, responsive breakpoints, light/dark themes, and reduced motion.
- [ ] Show local results for Michelle's review and leave deployment untouched.
