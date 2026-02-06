# App identity assets

Single source of truth for app name and asset paths: `src/config/app-identity.js`.

## Required assets

- **favicon.png** – Used as app icon (Expo `icon`), Android adaptive foreground, iOS icon, web favicon, and canonical logo until dedicated files exist. For production, provide **1024×1024** for icon and a separate logo if needed.
- **icon-192.png**, **icon-512.png** – PWA / “add to home screen” icons. Generate from a 1024×1024 source and place in `public/` so manifest.json (`/icon-192.png`, `/icon-512.png`) resolves. For favicon in PWA manifest, ensure `public/favicon.png` exists (copy from `assets/favicon.png` if needed). Optional: **apple-touch-icon** (e.g. 180×180) via custom web template for iOS home screen.

## Theme-aware logos

- **logo-light.png**, **logo-dark.png** – In-app branding (AppLogo, shell/header, AuthLayout). Keep in **assets/** (native bundle) and in **public/** (web; served as `/logo-light.png`, `/logo-dark.png`). Configured in `app-identity.js` as `ASSET_LOGO_LIGHT`, `ASSET_LOGO_DARK`, `PUBLIC_LOGO_LIGHT`, `PUBLIC_LOGO_DARK`.

## Verification (Step 9.0)

Build or run on Android, iOS, and Web; confirm app name, logo in UI, and icon/favicon in launcher, home screen, browser tab, and PWA/tablet.
