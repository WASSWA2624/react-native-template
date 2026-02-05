/**
 * useText hook
 * Resolves accessibility role from variant and optional explicit role.
 * File: useText.js
 */

/**
 * Resolves accessibility role for Text. Heading variants get 'header'; otherwise 'text'.
 * Explicit accessibilityRole takes precedence.
 * @param {string} [variant] - Text variant (h1, h2, h3, body, caption, label)
 * @param {string} [accessibilityRole] - Explicit role override
 * @returns {string} Resolved role for native (e.g. 'header', 'text')
 */
export function getAccessibilityRole(variant, accessibilityRole) {
  if (typeof accessibilityRole === 'string' && accessibilityRole.length > 0) {
    return accessibilityRole;
  }
  if (variant === 'h1' || variant === 'h2' || variant === 'h3') {
    return 'header';
  }
  return 'text';
}

/**
 * Hook for Text component: returns resolved accessibility role for given props.
 * @param {Object} options
 * @param {string} [options.variant]
 * @param {string} [options.accessibilityRole]
 * @returns {{ accessibilityRole: string }}
 */
export function useText({ variant, accessibilityRole } = {}) {
  return {
    accessibilityRole: getAccessibilityRole(variant, accessibilityRole),
  };
}
