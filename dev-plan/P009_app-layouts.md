# Phase 9: Base Layouts & Global UI (App Shell Expansion)

## Purpose
Create the shared UI shell used by all HMS screens: layouts, headers, footers, primary navigation, theme controls, language selection, and other global UI controls. These components must be fully wired into the relevant layouts so that the application runs end-to-end without errors. All global UI elements should be seamlessly integrated within their respective route group layouts, functioning correctly and without introducing any runtime failures.

## Rule References
- `.cursor/rules/app-router.mdc` (Route groups and layout placement)
- `.cursor/rules/platform-ui.mdc` (Screen/layout structure)
- `.cursor/rules/component-structure.mdc` (Component organization)
- `.cursor/rules/theme-design.mdc` (Theme tokens and switching)
- `.cursor/rules/i18n.mdc` (Language selection and translations)
- `.cursor/rules/accessibility.mdc` (A11y requirements)
- `.cursor/rules/testing.mdc` (UI testing requirements)

## Prerequisites
- Phase 7 completed (app shell + route groups)
- Phase 8 completed (minimal runnable app)

## Scope
- App-level layouts for `(auth)`, `(main)`, `(patient)` groups, with all UI shell components actually imported and rendered in the corresponding `_layout.jsx` files in a functional, non-broken form
- Global header, footer, and navigation structures must be present and rendered by the layouts
- Theme mode controls (light/dark/high-contrast) must be implemented, connected to app state, and functional in real usage
- Language selection controls must be present, hooked to i18n, and switch languages without errors
- All shared UI shell behaviors (navigation state, titles, breadcrumbs, banners) should update/rerender safely with no runtime problems

## Definition of Done
- All layout components are created and actually used in the route group `_layout.jsx` files; navigation, header, footer, etc. must be rendered in the live app
- Header/footer/navigation components are reusable, theme-aware, and error-free as part of app skeleton
- Theme and language controls work, update UI on interaction, and persist preferences with no crashes or bugs
- All UI text renders via i18n, with no untranslated or hardcoded values, and language changes are reflected live
- The UI is accessible (per rules) and all integrated layouts pass basic and navigation interaction tests with no errors on render

## Steps (Atomic, with Wiring and Error-Free Guarantee)

### Step 9.1.1: Define and wire base layout primitives
- Create layout primitives (`AppFrame`, `AuthFrame`, `PatientFrame`)
- Expose clear slot conventions for header, footer, content, overlays
- Import these primitives into the appropriate `_layout.jsx` files and verify they compose correctly without runtime errors

### Step 9.1.2: Integrate global header(s)
- Implement header component(s) with title, context actions, and (optionally) breadcrumbs
- Slot header(s) into all relevant layouts and ensure error-free integration
- Provide role-aware action injection via props or context (no ad-hoc or feature-dependent imports)
- Implement safe-area, focus management, and a11y roles/labels as needed

### Step 9.1.3: Integrate global footer(s)
- Build footer component(s) for status, legal, and quick actions
- Integrate and render footers in all route-group layouts (auth/main/patient), ensuring no mounting errors or typos

### Step 9.1.4: Add primary navigation shell and ensure live wiring
- Create platform-appropriate navigation (drawer/tab/rail, etc.) for main/patient
- Integrate navigation components into the layouts, pass guards/roles from real app state
- All navigation must be live (routes reachable, overlays working, errors handled)

### Step 9.1.5: Theme controls integration
- Render UI controls for theme (light/dark/high-contrast) in the UI shell
- Wire controls to theme state and persist preference
- Changing theme updates UI with no rendering or hydration errors

### Step 9.1.6: Language selection controls integration
- Render language selector UI clearly accessible (header/settings)
- Wire to i18n context and persist selection
- Language switching updates all UI and does not cause runtime errors

### Step 9.1.7: Integrate global banners and shell utilities
- Implement offline/online banner, maintenance banner, and loading overlay
- Add toast/notice surface for global messages
- All banners/utilities are mounted and unmounted safely across all layout variants

### Step 9.1.8: Online/offline and network quality alerts
- Add hook/util to detect online/offline, debounce events to avoid unwanted re-renders
- Render live banner in shell if offline/low quality (never expose sensitive info)
- Use available Network Info APIs as a best effort; always ensure fallback to the safest method
- Write integration tests that verify detection, alert UI, and error-free switching

## Testing Requirements
- All layout and shell components: render, compose, and pass accessibility checks without throwing errors
- Header/footer/navigation tested for loading, empty state, and role changes (no unhandled branches)
- Theme and language toggles: tested for correct persistence and dynamic UI updates, with zero runtime warnings or crashes
