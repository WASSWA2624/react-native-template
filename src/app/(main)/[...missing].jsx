/**
 * Catch-all for (main): invalid path shows page not found in content area without crashing.
 * Per app-router.mdc: 404 handler in content area keeps layout (sidebar, header) visible.
 */
import { NotFoundScreen } from '@platform/screens';

export default function MainNotFound() {
  return <NotFoundScreen />;
}
