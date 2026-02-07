/**
 * GlobalFooter Component Types
 * Shared constants for GlobalFooter component
 * File: types.js
 */

const FOOTER_VARIANTS = {
  AUTH: 'auth',
  MAIN: 'main',
  PATIENT: 'patient',
  /** Minimal footer (logo, app name, copyright, support) to match mobile web */
  MINIMAL: 'minimal',
};

const STATUS_TONES = {
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const ACTION_VARIANTS = {
  PRIMARY: 'primary',
  GHOST: 'ghost',
};

export { FOOTER_VARIANTS, STATUS_TONES, ACTION_VARIANTS };
