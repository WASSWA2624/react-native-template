/**
 * MainFrame Component Tests
 * File: MainFrame.test.js
 */

import React from 'react';
import { Text } from 'react-native';
import MainFrame from '@platform/layouts/frames/MainFrame';
import { renderWithProviders } from '../../helpers/test-utils';

const renderWithTheme = (component) =>
  renderWithProviders(component, {
    initialState: { ui: { theme: 'light', locale: 'en', isLoading: false } },
  });

describe('MainFrame Component', () => {
  it('should render children', () => {
    const { getByText } = renderWithTheme(
      <MainFrame>
        <Text>Content</Text>
      </MainFrame>
    );
    expect(getByText('Content')).toBeTruthy();
  });

  it('should render header and footer when provided', () => {
    const { getByText } = renderWithTheme(
      <MainFrame header={<Text>Header</Text>} footer={<Text>Footer</Text>}>
        <Text>Content</Text>
      </MainFrame>
    );
    expect(getByText('Header')).toBeTruthy();
    expect(getByText('Footer')).toBeTruthy();
    expect(getByText('Content')).toBeTruthy();
  });

  it('should accept accessibilityLabel', () => {
    const { getByLabelText } = renderWithTheme(
      <MainFrame accessibilityLabel="Main frame">
        <Text>Content</Text>
      </MainFrame>
    );
    expect(getByLabelText('Main frame')).toBeTruthy();
  });

  describe('Platform-specific', () => {
    it('should render Android MainFrame', () => {
      const MainFrameAndroid = require('@platform/layouts/frames/MainFrame/MainFrame.android').default;
      const { getByText } = renderWithTheme(
        <MainFrameAndroid header={<Text>H</Text>} footer={<Text>F</Text>}>
          <Text>C</Text>
        </MainFrameAndroid>
      );
      expect(getByText('C')).toBeTruthy();
      expect(getByText('H')).toBeTruthy();
      expect(getByText('F')).toBeTruthy();
    });

    it('should render iOS MainFrame', () => {
      const MainFrameIOS = require('@platform/layouts/frames/MainFrame/MainFrame.ios').default;
      const { getByText } = renderWithTheme(
        <MainFrameIOS header={<Text>H</Text>} footer={<Text>F</Text>}>
          <Text>C</Text>
        </MainFrameIOS>
      );
      expect(getByText('C')).toBeTruthy();
    });

    it('should render Web MainFrame', () => {
      const MainFrameWeb = require('@platform/layouts/frames/MainFrame/MainFrame.web').default;
      const { getByText } = renderWithTheme(
        <MainFrameWeb header={<Text>H</Text>} footer={<Text>F</Text>}>
          <Text>C</Text>
        </MainFrameWeb>
      );
      expect(getByText('C')).toBeTruthy();
    });
  });

  it('should export from index', () => {
    const index = require('@platform/layouts/frames/MainFrame');
    expect(index.default).toBeDefined();
    expect(index.useMainFrame).toBeDefined();
    expect(index.FRAME_SLOTS).toBeDefined();
  });
});
