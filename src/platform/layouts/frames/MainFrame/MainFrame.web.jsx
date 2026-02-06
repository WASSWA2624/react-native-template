/**
 * MainFrame Component - Web
 * Layout frame with header, footer, content slots
 * File: MainFrame.web.jsx
 */

import React from 'react';
import {
  StyledContainer,
  StyledContent,
  StyledContentBody,
  StyledFooter,
  StyledHeader,
} from './MainFrame.web.styles';
import useMainFrame from './useMainFrame';

const MainFrameWeb = ({
  children,
  header,
  footer,
  accessibilityLabel,
  testID,
  className,
}) => {
  const { hasFooter, hasHeader } = useMainFrame({ header, footer });

  return (
    <StyledContainer
      className={className}
      testID={testID}
      role="main"
      aria-label={accessibilityLabel}
    >
      {hasHeader && <StyledHeader role="banner">{header}</StyledHeader>}
      <StyledContent hasFooter={hasFooter}>
        <StyledContentBody>{children}</StyledContentBody>
      </StyledContent>
      {hasFooter && <StyledFooter role="contentinfo">{footer}</StyledFooter>}
    </StyledContainer>
  );
};

export default MainFrameWeb;
