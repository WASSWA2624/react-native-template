# Modern Responsive App UI Layout

## Objective
Design a **modern, simple, fully responsive** application layout for dashboards, SaaS, and admin panels. The layout must be scalable, accessible, and performant across web, iOS, and Android with a clear content hierarchy.

---

## Layout Overview
Three primary regions inside a full-height shell:
- **Side navigation** (left, resizable, collapsible)
- **Header** (top, compact, single row)
- **Content column** (main content + footer)

The side navigation and content column scroll independently.

---

## Side Navigation
- **Left-aligned** by default; toggled via hamburger button.
- **Resizable width** with a drag handle; min/ideal/max widths.
- **Width and open state persist** across sessions.
- **Independent scrolling** for the nav list.
- **Bottom-anchored utility row (non-scrollable)**:
  - Language + theme selectors side by side.
  - Stays pinned to the bottom even when nav list scrolls.
- **Motion**: subtle open/close transitions with reduced-motion support.

**Responsive behavior**
- **Desktop/Tablet**: expanded by default (or last state), icons + labels.
- **Mobile**: hidden by default; opens as overlay with backdrop + visible close (X).
  - Overlay dismisses on backdrop tap.
  - Icons only for nav items.

---

## Header (Top Bar)
- **Sticky or fixed**, compact height, **single-row** layout only.
- **Contains**:
  - Hamburger toggle
  - App logo + name (logo-only or short label on small screens)
  - Optional **hide/show header** control with a persistent “Show header” button when hidden
  - Full screen toggle (desktop only; available via overflow on mobile)
  - Notifications icon with badge and scrollable dropdown
  - Network status indicator (icon-only on mobile)

**Overflow and customization**
- All actions remain on one row; if space is tight, use a **Show more** overflow.
- **Mobile**: only **Show more** is visible (except hamburger + network).
- Provide a **customize actions** control for visibility preferences.

**Control consistency**
- Uniform icon size, hit area (>= 44x44), padding, radius, and states.
- Mobile buttons are **icon-only**, with minimal chrome.
- On/Off states must not rely on color alone.

---

## Main Content Area
- Positioned to the right of the side nav; **auto-resizes** as nav width changes.
- **Independent scrolling** from the nav.
- Supports cards, grids, and data-dense pages.
- Responsive padding and gutters via **theme breakpoints**.
- Large screens: allow wider layouts but keep **readable max widths** for text-heavy views.

---

## Footer
- Lives at the **bottom of the content column** and scrolls with content.
- Uses flex layout to stay at the end of content flow.
- Includes:
  - Secondary links (terms, privacy)
  - Status/build info
  - Optional support/help shortcuts
- Subtle styling; never distracts.

---

## Responsive Behavior Summary
**Desktop/Tablet**
- Side nav expanded (persisted), icons + labels visible.
- Logo + name visible.
- Header actions align on one row; overflow when needed.

**Mobile**
- Side nav hidden by default; overlay with close (X).
- Touch targets >= 44x44; icon-only header controls.
- Dropdowns and panels fit the viewport.

---

## UX & Accessibility
- Full keyboard support on web; focus trapping in open menus.
- Visible focus states and clear hover/active feedback.
- ARIA labels/hints on all interactive elements.
- Reduced-motion support and no layout shift on interaction.
- Contrast meets WCAG AA; color is never the only indicator.

---

## Theme & Design System Alignment
- Light/dark modes supported; **theme tokens** drive color, spacing, typography, radius, shadows.
- Responsive behavior uses **theme breakpoints** and shared helpers.
- Consistent visual rhythm and spacing scale across all regions.

---

## State & Persistence
- Persist: theme, language, nav open/width, header visibility, and action visibility.
- Restore state on load **without layout jumps**.

---

## Style Guidelines
- Clean, minimal, content-first.
- Clear hierarchy: logo/name → nav → content → footer.
- Subtle separators/elevation to define regions.
- Micro-interactions for feedback; no visual clutter.

---

## Output Expectation
Deliver a **modern, simple, elegant, fully responsive** layout emphasizing:
- Usability
- Scalability
- Accessibility
- Performance
