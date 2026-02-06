/**
 * App Identity – single source of truth for app name, short name, and asset paths.
 * Used by app.config.js (Expo) and in-app branding (shell/header, AuthLayout).
 * File: app-identity.js
 */

/** Display name (Expo name, web.name, launcher) */
export const APP_DISPLAY_NAME = 'Hospital Management System';

/** Short name (web.shortName, PWA, home screen) */
export const APP_SHORT_NAME = 'HMS';

/** Fluent primary for Android adaptiveIcon backgroundColor and web themeColor (theme-design.mdc) */
export const FLUENT_PRIMARY = '#0078D4';

/** App icon path (1024×1024 recommended; used for Expo icon, Android foreground, iOS) */
export const ASSET_ICON = './assets/favicon.png';

/** Light-theme logo (assets for native bundle; public for web) */
export const ASSET_LOGO_LIGHT = './assets/logo-light.png';
/** Dark-theme logo */
export const ASSET_LOGO_DARK = './assets/logo-dark.png';

/** Web: absolute paths to logos in public (used by AppLogo on web) */
export const PUBLIC_LOGO_LIGHT = '/logo-light.png';
export const PUBLIC_LOGO_DARK = '/logo-dark.png';
