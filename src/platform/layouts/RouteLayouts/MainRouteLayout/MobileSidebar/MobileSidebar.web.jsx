/**
 * MobileSidebar - Web
 * Mobile sidebar overlay; close on navigate so routing works and drawer closes.
 * File: MobileSidebar/MobileSidebar.web.jsx
 */
import React, { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { Sidebar } from '@platform/components';
import Brand from '../Brand';
import {
  StyledMobileSidebarBackdrop,
  StyledMobileSidebarContent,
  StyledMobileSidebarHeader,
  StyledMobileSidebarHeaderBrand,
  StyledMobileSidebarOverlay,
  StyledMobileSidebarPanel,
  StyledMobileCloseButton,
} from './MobileSidebar.web.styles';

export default function MobileSidebar({
  isOpen,
  onClose,
  onKeyDown,
  sidebarLabel,
  closeLabel,
  mainItems,
  isItemVisible,
  appName,
  appShortName,
  closeButtonRef,
  panelRef,
}) {
  const router = useRouter();
  const handleItemPress = useCallback(
    (item, href) => {
      onClose();
      if (href) router.push(href);
    },
    [onClose, router]
  );

  return (
    <StyledMobileSidebarOverlay
      $isOpen={isOpen}
      aria-hidden={!isOpen}
      onKeyDown={onKeyDown}
    >
      <StyledMobileSidebarPanel
        $isOpen={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label={sidebarLabel}
        ref={panelRef}
      >
        <StyledMobileSidebarHeader>
          <StyledMobileSidebarHeaderBrand>
            <Brand
              appName={appName ?? ''}
              appShortName={appShortName ?? appName ?? ''}
            />
          </StyledMobileSidebarHeaderBrand>
          <StyledMobileCloseButton
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            ref={closeButtonRef}
          >
            X
          </StyledMobileCloseButton>
        </StyledMobileSidebarHeader>
        <StyledMobileSidebarContent>
          <Sidebar
            accessibilityLabel={sidebarLabel}
            items={mainItems}
            collapsed={false}
            onItemPress={handleItemPress}
            footerSlot={null}
            testID="main-sidebar-mobile"
          />
        </StyledMobileSidebarContent>
      </StyledMobileSidebarPanel>
      <StyledMobileSidebarBackdrop
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
      />
    </StyledMobileSidebarOverlay>
  );
}
