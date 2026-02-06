/**
 * MainFrame Component - iOS
 * Layout frame with header, footer, content slots
 * File: MainFrame.ios.jsx
 */

import React from 'react';
import {
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledScrollView,
} from './MainFrame.ios.styles';
import useMainFrame from './useMainFrame';

const MainFrameIOS = ({
  children,
  header,
  footer,
  accessibilityLabel,
  testID,
}) => {
  const { hasFooter, hasHeader } = useMainFrame({ header, footer });

  return (
    <StyledContainer accessibilityLabel={accessibilityLabel} testID={testID}>
      {hasHeader && <StyledHeader>{header}</StyledHeader>}
      <StyledScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <StyledContent>{children}</StyledContent>
      </StyledScrollView>
      {hasFooter && <StyledFooter>{footer}</StyledFooter>}
    </StyledContainer>
  );
};

export default MainFrameIOS;
