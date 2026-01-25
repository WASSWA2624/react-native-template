# MODULE SCAFFOLD TEMPLATE - Use this guide to create remaining 7 modules

## MODULES TO CREATE (with existing pattern):
1. ✓ user-profile (COMPLETED - 18 files)
2. ✓ role (COMPLETED - 18 files)
3. permission (TODO - 18 files) - Use usePermission hook
4. role-permission (TODO - 18 files) - Use useRolePermission hook
5. user-role (TODO - 18 files) - Use useUserRole hook
6. api-key (TODO - 18 files) - Use useApiKey hook
7. api-key-permission (TODO - 18 files) - Use useApiKeyPermission hook
8. user-mfa (TODO - 18 files) - Use useUserMfa hook
9. oauth-account (TODO - 18 files) - Use useOauthAccount hook

## DIRECTORY STRUCTURE FOR EACH MODULE:
```
src/platform/screens/settings/
├── {ModuleName}ListScreen/
│   ├── index.js
│   ├── types.js
│   ├── use{ModuleName}ListScreen.js
│   ├── {ModuleName}ListScreen.jsx
│   ├── {ModuleName}ListScreen.web.jsx
│   ├── {ModuleName}ListScreen.android.jsx
│   ├── {ModuleName}ListScreen.ios.jsx
│   ├── {ModuleName}ListScreen.web.styles.jsx
│   ├── {ModuleName}ListScreen.android.styles.jsx
│   └── {ModuleName}ListScreen.ios.styles.jsx
└── {ModuleName}DetailScreen/
    ├── index.js
    ├── types.js
    ├── use{ModuleName}DetailScreen.js
    ├── {ModuleName}DetailScreen.jsx
    ├── {ModuleName}DetailScreen.web.jsx
    ├── {ModuleName}DetailScreen.android.jsx
    ├── {ModuleName}DetailScreen.ios.jsx
    ├── {ModuleName}DetailScreen.web.styles.jsx
    ├── {ModuleName}DetailScreen.android.styles.jsx
    └── {ModuleName}DetailScreen.ios.styles.jsx
```

## QUICK REFERENCE FOR EACH MODULE:

### Module: Permission
- Hook: usePermission
- Route: /settings/permissions
- i18n: permission.*
- Primary field: name

### Module: RolePermission
- Hook: useRolePermission
- Route: /settings/role-permissions
- i18n: role-permission.*
- Primary field: id

### Module: UserRole
- Hook: useUserRole
- Route: /settings/user-roles
- i18n: user-role.*
- Primary field: id

### Module: ApiKey
- Hook: useApiKey
- Route: /settings/api-keys
- i18n: api-key.*
- Primary field: name

### Module: ApiKeyPermission
- Hook: useApiKeyPermission
- Route: /settings/api-key-permissions
- i18n: api-key-permission.*
- Primary field: id

### Module: UserMfa
- Hook: useUserMfa
- Route: /settings/user-mfas
- i18n: user-mfa.*
- Primary field: id

### Module: OauthAccount
- Hook: useOauthAccount
- Route: /settings/oauth-accounts
- i18n: oauth-account.*
- Primary field: provider

## PATTERN SUMMARY:
All modules follow identical structure. Key substitutions are:
- Replace {ModuleName} with PascalCase (e.g., Permission, ApiKey)
- Replace {moduleName} with camelCase (e.g., permission, apiKey)
- Replace module-name with kebab-case (e.g., permission, api-key)
- Replace useModuleHook with actual hook name from @hooks
- Replace /settings/module-path with actual route
- Replace module.* with i18n key prefix

## CREATION STEPS:
1. Create directories for each module (both List and Detail screens)
2. Copy files from user-profile or role module as templates
3. Update all hook names, routes, and i18n keys
4. Ensure testID attributes follow pattern: {slug}-{action}-{id}
5. Verify all imports use correct hook names
