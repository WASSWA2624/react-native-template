/**
 * Theme Provider Wrapper
 * 
 * Reads theme mode from Redux store and provides it to ThemeProvider.
 * Must be inside Redux Provider to access store.
 * 
 * Per bootstrap-config.mdc: ThemeProvider mounted only in root layout.
 * Per theme-design.mdc: Theme consumption via styled-components.
 * 
 * Per component-structure.mdc: Reusable layout components belong in platform/layouts/
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider as BaseThemeProvider } from '@theme';
import { selectTheme } from '@store/selectors';

// Global style reset to ensure full-width layouts work correctly
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  #root, [data-reactroot] {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
`;

const ThemeProviderWrapper = ({ children }) => {
  const themeMode = useSelector(selectTheme);
  
  // #region agent log
  globalThis.__themeProviderWrapperRenderCount = (globalThis.__themeProviderWrapperRenderCount || 0) + 1;
  fetch('http://127.0.0.1:7249/ingest/0ca3e34c-db2d-4973-878f-b50eb78eba91',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'B',location:'ThemeProviderWrapper.jsx:21',message:'ThemeProviderWrapper render',data:{renderCount:globalThis.__themeProviderWrapperRenderCount,themeMode},timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  return (
    <BaseThemeProvider theme={themeMode}>
      <GlobalStyle />
      {children}
    </BaseThemeProvider>
  );
};

export default ThemeProviderWrapper;

