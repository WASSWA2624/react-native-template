/**
 * Header Component Tests
 * Per testing.mdc and accessibility.mdc
 * File: Header.test.js
 */
import React from 'react';
import { Text } from 'react-native';
import { renderWithProviders } from '../../../helpers/test-utils';
import HeaderModule from '@platform/components/navigation/Header';

const Header = HeaderModule.default || HeaderModule;

jest.mock('@hooks', () => ({
  useI18n: () => ({
    t: (key) => key,
    locale: 'en',
  }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
}));

describe('Header Component', () => {
  it('renders title', () => {
    const { getByText } = renderWithProviders(
      <Header title="Page Title" testID="header" />
    );
    expect(getByText('Page Title')).toBeTruthy();
  });

  it('renders subtitle when provided', () => {
    const { getByText } = renderWithProviders(
      <Header title="Page" subtitle="Optional subtitle" testID="header" />
    );
    expect(getByText('Page')).toBeTruthy();
    expect(getByText('Optional subtitle')).toBeTruthy();
  });

  it('renders custom title node', () => {
    const { getByText } = renderWithProviders(
      <Header title={<Text>Custom Title</Text>} testID="header" />
    );
    expect(getByText('Custom Title')).toBeTruthy();
  });

  it('renders leadingSlot', () => {
    const { getByText } = renderWithProviders(
      <Header
        title="Title"
        leadingSlot={<Text>Back</Text>}
        testID="header"
      />
    );
    expect(getByText('Back')).toBeTruthy();
    expect(getByText('Title')).toBeTruthy();
  });

  it('renders trailingSlot', () => {
    const { getByText } = renderWithProviders(
      <Header
        title="Title"
        trailingSlot={<Text>Action</Text>}
        testID="header"
      />
    );
    expect(getByText('Action')).toBeTruthy();
    expect(getByText('Title')).toBeTruthy();
  });

  it('applies testID', () => {
    const { getByTestId } = renderWithProviders(
      <Header title="Title" testID="my-header" />
    );
    expect(getByTestId('my-header')).toBeTruthy();
  });

  it('uses accessibilityLabel when provided', () => {
    const { getByLabelText } = renderWithProviders(
      <Header
        title="Title"
        accessibilityLabel="Page header"
        testID="header"
      />
    );
    expect(getByLabelText('Page header')).toBeTruthy();
  });

  it('falls back to title string for accessibility when no accessibilityLabel', () => {
    const { getByLabelText } = renderWithProviders(
      <Header title="Dashboard" testID="header" />
    );
    expect(getByLabelText('Dashboard')).toBeTruthy();
  });

  it('falls back to i18n key when no title and no accessibilityLabel', () => {
    const { getByLabelText } = renderWithProviders(
      <Header testID="header" />
    );
    expect(getByLabelText('navigation.header.title')).toBeTruthy();
  });

  it('renders with all slots', () => {
    const { getByText } = renderWithProviders(
      <Header
        title="Full"
        subtitle="Sub"
        leadingSlot={<Text>L</Text>}
        trailingSlot={<Text>T</Text>}
        testID="header"
      />
    );
    expect(getByText('Full')).toBeTruthy();
    expect(getByText('Sub')).toBeTruthy();
    expect(getByText('L')).toBeTruthy();
    expect(getByText('T')).toBeTruthy();
  });

  it('renders without crashing when title is null', () => {
    const { getByTestId } = renderWithProviders(
      <Header testID="header" />
    );
    expect(getByTestId('header')).toBeTruthy();
  });
});
