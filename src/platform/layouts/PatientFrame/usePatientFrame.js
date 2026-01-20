/**
 * PatientFrame Hook
 * Shared slot visibility logic for PatientFrame
 * File: usePatientFrame.js
 */

import { useMemo } from 'react';

const usePatientFrame = ({ header, footer, sidebar, breadcrumbs, overlay, banner }) => {
  return useMemo(() => {
    return {
      hasHeader: Boolean(header),
      hasFooter: Boolean(footer),
      hasSidebar: Boolean(sidebar),
      hasBreadcrumbs: Boolean(breadcrumbs),
      hasOverlay: Boolean(overlay),
      hasBanner: Boolean(banner),
    };
  }, [banner, breadcrumbs, footer, header, overlay, sidebar]);
};

export default usePatientFrame;
