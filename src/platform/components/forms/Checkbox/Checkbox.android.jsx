/**
 * Checkbox Component - Android
 * Single/multiple selection
 * File: Checkbox.android.jsx
 */

import React from 'react';
import { useI18n } from '@hooks';
import { useCheckbox } from './useCheckbox';
import { StyledCheckbox, StyledCheckboxBox, StyledCheckboxCheck, StyledCheckboxLabel } from './Checkbox.android.styles';

/**
 * Checkbox component for Android
 * @param {Object} props - Checkbox props
 * @param {boolean} props.checked - Checked state
 * @param {Function} props.onChange - Change handler
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.label - Checkbox label
 * @param {string} props.value - Checkbox value
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.accessibilityHint - Accessibility hint
 * @param {string} props.testID - Test identifier
 * @param {Object} props.style - Additional styles
 */
const CheckboxAndroid = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  value,
  accessibilityLabel,
  accessibilityHint,
  testID,
  style,
  ...rest
}) => {
  const { t } = useI18n();
  const { computedAccessibilityLabel, handlePress } = useCheckbox({
    checked,
    onChange,
    disabled,
    label,
    value,
    accessibilityLabel,
  });

  const finalAccessibilityLabel = computedAccessibilityLabel || t('common.checkbox');

  return (
    <StyledCheckbox
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={finalAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
      style={style}
      {...rest}
    >
      <StyledCheckboxBox checked={checked} disabled={disabled}>
        {checked && <StyledCheckboxCheck />}
      </StyledCheckboxBox>
      {label && <StyledCheckboxLabel disabled={disabled}>{label}</StyledCheckboxLabel>}
    </StyledCheckbox>
  );
};

export default CheckboxAndroid;

