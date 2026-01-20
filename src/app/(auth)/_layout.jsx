import React, { useEffect, useRef } from 'react';
import { Slot, useRouter } from 'expo-router';
import { useShellBanners, useUiState } from '@hooks';
import { useAuthGuard } from '@navigation/guards';
import { AuthFrame } from '@platform/layouts';
import { LoadingOverlay, NoticeSurface, ShellBanners } from '@platform/components';
import GlobalFooter, { FOOTER_VARIANTS } from '@platform/components/navigation/GlobalFooter';

/**
 * Auth Group Layout
 * 
 * Layout wrapper for authentication routes (login, register, etc.).
 * 
 * Per app-router.mdc:
 * - Layouts use `_layout.jsx`, default exports, `<Slot />` for child routes
 * - Guard placement: guards in layouts, not screens
 * 
 * This layout redirects authenticated users away from auth routes (e.g., login when already logged in).
 * Per Step 7.14: Uses useAuthGuard hook with skipRedirect option to get auth state,
 * then handles redirect of authenticated users to home route.
 */
const AuthLayout = () => {
  const router = useRouter();
  const { authenticated } = useAuthGuard({ skipRedirect: true });
  const { isLoading } = useUiState();
  const banners = useShellBanners();
  
  // Use ref to track if redirect has been performed to prevent multiple redirects
  const hasRedirected = useRef(false);
  
  useEffect(() => {
    // Redirect authenticated users to home route
    if (authenticated && !hasRedirected.current) {
      hasRedirected.current = true;
      router.replace('/home');
    } else if (!authenticated) {
      // Reset redirect flag when unauthenticated
      hasRedirected.current = false;
    }
  }, [authenticated, router]);
  
  const bannerSlot = banners.length ? <ShellBanners banners={banners} testID="auth-shell-banners" /> : null;
  const overlaySlot = isLoading ? <LoadingOverlay visible testID="auth-loading-overlay" /> : null;

  return (
    <AuthFrame
      testID="auth-route-layout"
      banner={bannerSlot}
      overlay={overlaySlot}
      notices={<NoticeSurface testID="auth-notice-surface" />}
      footer={(
        <GlobalFooter
          variant={FOOTER_VARIANTS.AUTH}
          testID="auth-footer"
        />
      )}
    >
      <Slot />
    </AuthFrame>
  );
};

export default AuthLayout;

