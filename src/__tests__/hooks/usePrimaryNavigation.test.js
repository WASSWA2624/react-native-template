/**
 * usePrimaryNavigation Hook Tests
 * File: usePrimaryNavigation.test.js
 */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';
import rootReducer from '@store/rootReducer';
import usePrimaryNavigation from '@hooks/usePrimaryNavigation';

const TestComponent = ({ onResult }) => {
  const result = usePrimaryNavigation();
  React.useEffect(() => {
    onResult(result);
  }, [onResult, result]);
  return null;
};

const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: {
      ui: {
        theme: 'light',
        locale: 'en',
        isLoading: false,
        isAuthenticated: false,
        user: null,
      },
      network: {
        isOnline: true,
      },
      ...preloadedState,
    },
  });

describe('usePrimaryNavigation', () => {
  it('builds main and patient items with labels', () => {
    const store = createStore({
      ui: {
        theme: 'light',
        locale: 'en',
        isLoading: false,
        isAuthenticated: true,
        user: { role: 'patient' },
      },
    });
    let result;
    render(
      <Provider store={store}>
        <TestComponent onResult={(value) => (result = value)} />
      </Provider>
    );
    expect(result.mainItems.length).toBeGreaterThan(0);
    expect(result.patientItems.length).toBeGreaterThan(0);
    expect(result.mainItems[0].label).toBeDefined();
    expect(result.patientItems[0].label).toBeDefined();
  });

  it('filters items by role using isItemVisible', () => {
    const store = createStore({
      ui: {
        theme: 'light',
        locale: 'en',
        isLoading: false,
        isAuthenticated: true,
        user: { role: 'patient' },
      },
    });
    let result;
    render(
      <Provider store={store}>
        <TestComponent onResult={(value) => (result = value)} />
      </Provider>
    );
    const patientItem = { roles: ['patient'] };
    const staffItem = { roles: ['admin'] };
    expect(result.isItemVisible(patientItem)).toBe(true);
    expect(result.isItemVisible(staffItem)).toBe(false);
  });

  it('hides role-scoped items when unauthenticated', () => {
    const store = createStore();
    let result;
    render(
      <Provider store={store}>
        <TestComponent onResult={(value) => (result = value)} />
      </Provider>
    );
    expect(result.isItemVisible({ roles: ['patient'] })).toBe(false);
  });
});
