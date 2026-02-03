# Settings Full CRUD Implementation Guide

## Pattern (per resource)

For each settings resource (Unit, Room, Ward, Bed, Address, Contact, User, Role, Permission, etc.):

1. **Feature usecase** – Add `getPayload(response) => response?.data?.data ?? response?.data` and use it in list/get/create/update; for delete return `{ id }` and await API (no body).
2. **Detail hook** – Add `handleEdit` → `router.push(\`/settings/{resource}/${id}/edit\`)` and expose `onEdit`.
3. **Detail screen** (web, ios, android) – Destructure `onEdit` and add Edit button (secondary) before Delete.
4. **i18n** – Add `{resource}.detail.edit`, `editHint`; `{resource}.list.addLabel`, `addHint`; `{resource}.form.*` (createTitle, editTitle, nameLabel, etc., submitCreate, submitEdit, cancel, loadError).
5. **Form screen** – Create `{Resource}FormScreen` (useXxxFormScreen + web/android/ios + styles + index), fields per backend schema.
6. **Routes** – Add `settings/{resource}/create.jsx` and `settings/{resource}/[id]/edit.jsx` rendering FormScreen.
7. **List hook** – Add `handleAdd` → `router.push('/settings/{resource}/create')` and expose `onAdd`.
8. **List screen** (web, ios, android) – Destructure `onAdd` and add “Add” button next to title.
9. **Exports** – Export FormScreen from `platform/screens/settings/index.js` and `platform/screens/index.js`.

## Done

- **Tenant** – List, Detail, Form, create/edit routes ✓
- **Facility** – List, Detail, Form, create/edit routes ✓
- **Branch** – List, Detail, Form, create/edit routes, usecase unwrap ✓
- **Department** – List, Detail, Form, create/edit routes, usecase unwrap ✓

## To do (same pattern)

- ~~Unit, Room, Ward, Bed~~ ✓ – Form + routes + Detail onEdit + List onAdd + usecase unwrap
- Address, Contact – Form + routes + Detail onEdit + List onAdd + usecase unwrap
- User – Form + routes (Detail onEdit ✓, List onAdd + add button)
- UserProfile, Role, Permission, RolePermission, UserRole – Form + routes + Detail onEdit + List onAdd + usecase unwrap
- ApiKey, ApiKeyPermission, UserMfa – Form + routes + Detail onEdit + List onAdd + usecase unwrap
- UserSession, OauthAccount – Detail onEdit; List onAdd; Form only if backend supports create/update (sessions/oauth often read-only or revoke-only)

## Backend alignment

- All usecases must unwrap `response.data.data` for list/get/create/update (see `response-format.mdc`).
- Form payloads must match backend validation (e.g. tenant_id required on create for branch/department).
