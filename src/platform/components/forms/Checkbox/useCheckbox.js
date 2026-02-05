/**
 * useCheckbox
 * Shared logic hook for Checkbox component
 * File: useCheckbox.js
 */

import { useCallback, useMemo } from 'react';

/**
 * @param {Object} params
 * @param {boolean} params.checked
 * @param {Function} params.onChange - (nextChecked, value) => void
 * @param {boolean} params.disabled
 * @param {string} params.label
 * @param {*} params.value
 * @param {string} params.accessibilityLabel
 */
const useCheckbox = ({ checked, onChange, disabled, label, value, accessibilityLabel }) => {
  const computedAccessibilityLabel = useMemo(() => {
    if (accessibilityLabel) return accessibilityLabel;
    if (label) return label;
    if (typeof value === 'string' && value.length > 0) return value;
    if (typeof value === 'number') return String(value);
    return null;
  }, [accessibilityLabel, label, value]);

  const handlePress = useCallback(() => {
    if (!disabled && onChange) {
      onChange(!checked, value);
    }
  }, [disabled, onChange, checked, value]);

  const handleChange = useCallback(
    (event) => {
      if (disabled || !onChange) return;
      const nextChecked =
        event?.target && typeof event.target.checked === 'boolean'
          ? event.target.checked
          : !checked;
      onChange(nextChecked, value);
    },
    [disabled, onChange, checked, value]
  );

  return { computedAccessibilityLabel, handlePress, handleChange };
};

export { useCheckbox };
