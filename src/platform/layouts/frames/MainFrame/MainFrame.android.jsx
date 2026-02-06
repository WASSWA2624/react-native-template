/**
 * MainFrame Component - Android
 * Layout frame with header, footer, content slots
 * File: MainFrame.android.jsx
 */

import React from 'react';
import {
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledScrollView,
} from './MainFrame.android.styles';
import useMainFrame from './useMainFrame';

const MainFrameAndroid = ({
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

export default MainFrameAndroid;
