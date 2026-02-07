/**
 * MobileSidebar - iOS
 * Drawer overlay; close on navigate so routing works and drawer closes.
 * File: MobileSidebar/MobileSidebar.ios.jsx
 */
import React, { useCallback } from 'react';
import { Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { Sidebar } from '@platform/components';
import Brand from '../Brand';
import {
  StyledMobileSidebarBackdrop,
  StyledMobileSidebarContent,
  StyledMobileSidebarHeader,
  StyledMobileSidebarHeaderBrand,
  StyledMobileSidebarPanel,
  StyledMobileCloseButton,
  StyledMobileCloseButtonText,
  StyledMobileSidebarWrap,
} from './MobileSidebar.ios.styles';

export default function MobileSidebar({
  isOpen,
  onClose,
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

  if (!isOpen) return null;
  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      accessibilityViewIsModal
      accessibilityLabel={sidebarLabel}
    >
      <StyledMobileSidebarWrap>
        <StyledMobileSidebarPanel ref={panelRef}>
          <StyledMobileSidebarHeader>
            <StyledMobileSidebarHeaderBrand>
              <Brand
                appName={appName ?? ''}
                appShortName={appShortName ?? appName ?? ''}
              />
            </StyledMobileSidebarHeaderBrand>
            <StyledMobileCloseButton
              onPress={onClose}
              accessibilityLabel={closeLabel}
              ref={closeButtonRef}
            >
              <StyledMobileCloseButtonText>X</StyledMobileCloseButtonText>
            </StyledMobileCloseButton>
          </StyledMobileSidebarHeader>
          <StyledMobileSidebarContent>
            <Sidebar
              accessibilityLabel={sidebarLabel}
              items={mainItems}
              collapsed={false}
              onItemPress={handleItemPress}
              testID="main-sidebar-mobile"
            />
          </StyledMobileSidebarContent>
        </StyledMobileSidebarPanel>
        <StyledMobileSidebarBackdrop
          accessibilityLabel={closeLabel}
          accessibilityRole="button"
          onPress={onClose}
        />
      </StyledMobileSidebarWrap>
    </Modal>
  );
}
