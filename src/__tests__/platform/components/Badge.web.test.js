/**
 * Badge Component Web Tests
 * File: Badge.web.test.js
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@theme/light.theme';
import { VARIANTS, SIZES } from '@platform/components/display/Badge/types';
// eslint-disable-next-line import/no-unresolved
const BadgeWeb = require('@platform/components/display/Badge/Badge.web').default;

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

describe('Badge Component - Web', () => {
  describe('Web accessibility', () => {
    it('should render with role="status"', () => {
      const { getByRole } = renderWithTheme(
        <BadgeWeb variant={VARIANTS.WARNING} testID="web-badge">!</BadgeWeb>
      );
      const badge = getByRole('status');
      expect(badge).toBeTruthy();
    });

    it('should accept className prop', () => {
      const { getByRole } = renderWithTheme(
        <BadgeWeb className="custom-class" testID="web-badge">Test</BadgeWeb>
      );
      const badge = getByRole('status');
      expect(badge).toBeTruthy();
      expect(badge.className).toContain('custom-class');
    });
  });

  describe('Rendering', () => {
    it('should render primary variant', () => {
      const { getByText } = renderWithTheme(
        <BadgeWeb variant={VARIANTS.PRIMARY}>5</BadgeWeb>
      );
      expect(getByText('5')).toBeTruthy();
    });

    it('should render small size', () => {
      const { getByText } = renderWithTheme(
        <BadgeWeb size={SIZES.SMALL}>S</BadgeWeb>
      );
      expect(getByText('S')).toBeTruthy();
    });
  });
});
