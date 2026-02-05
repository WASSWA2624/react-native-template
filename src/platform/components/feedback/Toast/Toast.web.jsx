/**
 * Toast Component - Web
 * Temporary success/error messages (auto-dismiss)
 * File: Toast.web.jsx
 */

import React, { useEffect } from 'react';
import { StyledToast, StyledToastText } from './Toast.web.styles';
import { useI18n } from '@hooks';
import { VARIANTS, POSITIONS } from './types';

/**
 * Toast component for Web
 * @param {Object} props - Toast props
 * @param {string} props.variant - Toast variant (success, error, warning, info)
 * @param {string} props.position - Toast position (top, bottom, center)
 * @param {boolean} props.visible - Visibility state
 * @param {string|React.ReactNode} props.message - Toast message
 * @param {Function} props.onDismiss - Dismiss handler
 * @param {string} props.accessibilityLabel - Accessibility label
 * @param {string} props.testID - Test identifier
 * @param {string} props.className - Additional CSS class
 * @param {Object} props.style - Additional styles
 */
const ToastWeb = ({
  variant = VARIANTS.INFO,
  position = POSITIONS.BOTTOM,
  visible = false,
  message,
  onDismiss,
  accessibilityLabel,
  testID,
  className,
  style,
  ...rest
}) => {
  const { t } = useI18n();

  useEffect(() => {
    if (!visible || !onDismiss || typeof document === 'undefined') return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onDismiss();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, onDismiss]);
  // Determine if we should use message as label (only for non-empty strings and numbers)
  const canUseMessageAsLabel = (typeof message === 'string' && message !== '') || typeof message === 'number';
  const defaultAccessibilityLabel = accessibilityLabel || (canUseMessageAsLabel ? undefined : t('common.message'));
  
  // Convert message to string for accessibility label if it's a number
  // For empty strings or React nodes, use default label
  const messageLabel = typeof message === 'string' && message !== ''
    ? message 
    : (typeof message === 'number' ? String(message) : defaultAccessibilityLabel);
  
  if (!visible) return null;

  return (
    <StyledToast
      variant={variant}
      position={position}
      role="alert"
      aria-label={accessibilityLabel || messageLabel}
      data-testid={testID}
      testID={testID}
      className={className}
      style={style}
      title={onDismiss ? t('common.toastDismissHint') : undefined}
      {...rest}
    >
      <StyledToastText variant={variant}>{message}</StyledToastText>
    </StyledToast>
  );
};

export default ToastWeb;

