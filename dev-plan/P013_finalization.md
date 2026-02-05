# Phase 13: Finalization (Onboarding, Help, and Readiness)

## Purpose
Finalize the HMS application after core and advanced features are complete. Each step is **atomic** and covers a single deliverable.

## Rule References
- `.cursor/rules/features-domain.mdc` (Feature Template Structure - MANDATORY)
- `.cursor/rules/component-structure.mdc` (Screen Structure - MANDATORY)
- `.cursor/rules/platform-ui.mdc` (Screen Requirements - MANDATORY)
- `.cursor/rules/testing.mdc` (Testing Requirements - MANDATORY)
- `.cursor/rules/performance.mdc`
- `.cursor/rules/accessibility.mdc`
- `.cursor/rules/security.mdc`
- `.cursor/rules/errors-logging.mdc`
- `.cursor/rules/i18n.mdc`

## Prerequisites
- Phase 12 completed
- App Router and screens are in place

## Steps (Fully Atomic)

### Onboarding
- Step 13.1.1: Create onboarding feature skeleton (rules/model/api/usecase/events/index)
- Step 13.1.2: Implement onboarding rules and validation
- Step 13.1.3: Implement onboarding use cases
- Step 13.1.4: Create `useOnboarding` hook (UI gateway)
- Step 13.1.5: Build onboarding screens (role-aware flows)
- Step 13.1.6: Add onboarding tests (feature + hook + screens + a11y)

### Help System
- Step 13.2.1: Create help feature skeleton (rules/model/api/usecase/events/index)
- Step 13.2.2: Implement help content models and rules
- Step 13.2.3: Create `useHelp` hook (UI gateway)
- Step 13.2.4: Build contextual help screens and search
- Step 13.2.5: Add help tests (feature + hook + screens + a11y)

### Localization (preparation for Phase 14)
- Step 13.3.1: Finalize list of i18n keys used across the app; ensure keys are stable and follow dot notation (per `i18n.mdc`).
- Step 13.3.2: Validate that default locale (e.g. `en`) has all keys; document any placeholders. **Full implementation of all locale files and translations is Phase 14 (Locales — last phase).**
- Step 13.3.3: Verify locale metadata is surfaced in UI (language selector, persistence).

### Compliance, Security, and Offline Audits
- Step 13.4.1: Audit RBAC and route guard coverage
- Step 13.4.2: Verify audit log visibility and access rules
- Step 13.4.3: Validate offline flows for critical operations
- Step 13.4.4: Run threat and privacy review per write-up requirements
- Step 13.4.5: Verify accessibility per write-up Ch 14 (WCAG 2.1, high-contrast, font sizing, screen reader, keyboard navigation) per `.cursor/rules/accessibility.mdc`

### Performance and Release Readiness
- Step 13.5.1: Performance profiling and UI responsiveness checks
- Step 13.5.2: Load and stress checks for data-heavy screens
- Step 13.5.3: Final regression test suite
- Step 13.5.4: Final documentation updates
- Step 13.5.5: Release readiness checklist sign-off

**Exit Criteria**: All tests pass, localization prep is complete, audits are clean, and readiness checklist is signed off.

**Next Phase**: `P014_locales.md` (Locales — implementation of all locale files and translation completeness; **last phase**)
