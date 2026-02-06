/**
 * MainFrame Hook
 * Slot visibility for MainFrame
 * File: useMainFrame.js
 */

import { useMemo } from 'react';

const useMainFrame = ({ header, footer }) => {
  return useMemo(
    () => ({
      hasHeader: Boolean(header),
      hasFooter: Boolean(footer),
    }),
    [header, footer]
  );
};

export default useMainFrame;
