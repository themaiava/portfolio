# Executive desk portfolio refresh

## Purpose

Position Michelle Pink Rejuso as a reliable, detail-oriented virtual assistant for small-business owners and founders who need executive-style operational support. The site should feel established, calm, and precise while retaining a personal, approachable tone.

## Constraints

- Preserve the five offered services: Data Entry, Lead Research, PDF Data Migration, Customer Service Support, and File & Document Management.
- Do not publish dollar rates.
- Describe AI automation only as active learning and building, not as an offered service.
- Keep the hidden `journey.html` route available, but remove stale framing from prominent client-facing pages.
- Retain the existing static HTML/CSS/JS architecture, Calendly link, light/dark theme, and accessibility basics.
- Replace the Formspree contact form with direct email and verified personal contact links.

## Visual direction

The selected direction is **Executive desk**: restrained, supportive, and orderly.

### Design tokens

| Role | Light value | Intent |
| --- | --- | --- |
| Main surface | `#FFFDF9` | Warm, professional base |
| Secondary surface | `#F1E8DC` | Quiet section contrast |
| Main text | `#362F2B` | Softer than black, high legibility |
| Supporting text | `#766D65` | Readable body copy and metadata |
| Action | `#3F5C52` | Calm sage-green primary action |
| Detail accent | `#A96D42` | Reserved copper for emphasis and markers |
| Borders | `#E9DFD2` | Subtle visual structure |

Dark mode will use the same relationships rather than direct inverted light colors.

### Typography and layout

- Use an editorial serif only for primary page titles and a clean sans-serif for navigation, body copy, controls, and data.
- Replace the coding-terminal hero panel with a plain proof/benefits panel or an editorial support composition.
- Use a max-width reading column, generous whitespace, a 2-column desktop hero, and calm 3+2 service-card composition.
- Use cards only where grouping supports a decision; remove visual noise from excessive shadows, pills, emoji, and repeated hover motion.
- Respect reduced-motion preferences and provide visible keyboard focus.

## Page changes

### Shared components

- Apply the token system, navigation treatment, button styles, footer, typography, focus states, and responsive rules across every page.
- Remove the persistent dot-grid background and replace it with quiet, solid surfaces.
- Correct the CSS brace imbalance and consolidate conflicting/duplicated theme rules in the touched areas.

### Homepage

- Update the hero copy to describe executive and operational support for founders.
- Replace the code terminal with concise credibility signals: long-term support, accurate work, and clear communication.
- Reorder and simplify proof content so client outcomes precede personal claims.
- Retain service fit and process sections but tighten language and reduce decorative emoji.

### Services

- Preserve five services and their factual descriptions.
- Change the card grid from five narrow desktop columns to three cards followed by two cards.
- Make deliverables, best-fit work, and tools easy to scan without visual clutter.

### Work samples and about

- Present work samples as evidence of methods and outcomes, with clearer hierarchy around the three existing case studies.
- Strengthen the about page’s credential and experience presentation without inventing new qualifications.

### Contact

- Treat the contact page as a direct-contact experience: a prominent Gmail address, a LinkedIn profile link, and an optional Calendly discovery call.
- Remove Formspree integration and its submission script. Add other personal social profiles only when Michelle provides their exact URLs.

### AI journey

- Keep it out of primary navigation.
- Avoid calling May 2026 logs “current” on client-facing pages. Prominent links will describe it as a learning journal or be removed if they distract from the offered services.

## Behavior and verification

- Keep existing navigation, theme toggle, mobile menu, work filters, chatbot, and external links operational.
- Verify pages at desktop and mobile breakpoints in light and dark themes.
- Confirm keyboard focus visibility, `prefers-reduced-motion` behavior, HTML/CSS integrity, no JavaScript console errors, and preserved form/link URLs.

## Non-goals

- No new service categories, rates, or third-party integrations.
- No claim that AI automation is available as a paid service.
