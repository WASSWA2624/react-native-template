/**
 * useAppLogo Hook
 * File: useAppLogo.js
 */

import { SIZES } from './types';

const SIZE_DIMENSIONS = {
  [SIZES.SM]: { width: 24, height: 24 },
  [SIZES.MD]: { width: 48, height: 48 },
  [SIZES.LG]: { width: 96, height: 96 },
};

/**
 * @param {{ size?: string }} options
 * @returns {{ width: number, height: number }}
 */
function useAppLogo({ size = SIZES.MD } = {}) {
  return SIZE_DIMENSIONS[size] ?? SIZE_DIMENSIONS[SIZES.MD];
}

export default useAppLogo;
