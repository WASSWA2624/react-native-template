/**
 * Root Index Route
 * Redirects to home so the app opens on the home page.
 * Navigation is deferred until after Root Layout has mounted (expo-router requirement).
 */
import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function IndexRoute() {
  const router = useRouter();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (hasRedirected.current) return;
    hasRedirected.current = true;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        router.replace('/home');
      });
    });
    return () => cancelAnimationFrame(id);
  }, [router]);

  return null;
}
