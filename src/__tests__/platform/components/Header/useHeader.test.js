/**
 * useHeader Hook Tests
 * Per testing.mdc
 * File: useHeader.test.js
 */
import { renderHook } from '@testing-library/react-native';
import useHeader from '@platform/components/navigation/Header/useHeader';

jest.mock('@hooks', () => ({
  useI18n: () => ({
    t: (key) => key,
    locale: 'en',
  }),
}));

describe('useHeader', () => {
  it('returns resolvedLabel from accessibilityLabel when provided', () => {
    const { result } = renderHook(() =>
      useHeader({ accessibilityLabel: 'Custom label', title: 'Title' })
    );
    expect(result.current.resolvedLabel).toBe('Custom label');
  });

  it('returns title as resolvedLabel when string title and no accessibilityLabel', () => {
    const { result } = renderHook(() => useHeader({ title: 'My Page' }));
    expect(result.current.resolvedLabel).toBe('My Page');
  });

  it('returns default i18n key when no title and no accessibilityLabel', () => {
    const { result } = renderHook(() => useHeader({}));
    expect(result.current.resolvedLabel).toBe('navigation.header.title');
  });

  it('returns empty string when title is empty string and no accessibilityLabel', () => {
    const { result } = renderHook(() => useHeader({ title: '' }));
    expect(result.current.resolvedLabel).toBe('');
  });

  it('handles undefined options', () => {
    const { result } = renderHook(() => useHeader());
    expect(result.current).toHaveProperty('resolvedLabel');
  });
});
