/**
 * Error Boundary Component
 * Catches React rendering errors
 * File: ErrorBoundary.jsx
 */
import React from 'react';
import { logger } from '@logging';
import { handleError, normalizeError } from './error.handler';
import FallbackUI from './fallback.ui';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    const normalized = normalizeError(error);
    if (typeof __DEV__ !== 'undefined' && __DEV__) {
      normalized.devMessage = error?.message ?? String(error);
    }
    return { hasError: true, error: normalized };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof __DEV__ !== 'undefined' && __DEV__ && typeof console !== 'undefined') {
      console.error('[ErrorBoundary] Caught error:', error?.message ?? error, error?.stack, errorInfo?.componentStack);
    }
    const normalized = handleError(error, { errorInfo });
    logger.error('ErrorBoundary caught error', {
      error: normalized,
      errorInfo,
    });
    if (typeof __DEV__ !== 'undefined' && __DEV__) {
      normalized.devMessage = error?.message ?? normalized.devMessage ?? String(error);
    }
    this.setState((s) => (s.error?.code ? null : { error: normalized }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <FallbackUI
          error={this.state.error}
          onRetry={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

