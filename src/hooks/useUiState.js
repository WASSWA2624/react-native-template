/**
 * useUiState Hook
 * Provides global UI state flags for shell utilities.
 * File: useUiState.js
 */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectHeaderActionVisibility,
  selectIsHeaderHidden,
  selectIsLoading,
  selectIsSidebarCollapsed,
  selectSidebarWidth,
} from '@store/selectors';

const useUiState = () => {
  const isLoading = useSelector(selectIsLoading);
  const sidebarWidth = useSelector(selectSidebarWidth);
  const isSidebarCollapsed = useSelector(selectIsSidebarCollapsed);
  const isHeaderHidden = useSelector(selectIsHeaderHidden);
  const headerActionVisibility = useSelector(selectHeaderActionVisibility);

  return useMemo(
    () => ({
      isLoading,
      sidebarWidth,
      isSidebarCollapsed,
      isHeaderHidden,
      headerActionVisibility,
    }),
    [headerActionVisibility, isHeaderHidden, isLoading, sidebarWidth, isSidebarCollapsed]
  );
};

export default useUiState;
