/**
 * Divider iOS Styles
 * Styled-components for iOS platform
 * File: Divider.ios.styles.jsx
 */

import styled from 'styled-components/native';

const StyledDivider = styled.View.withConfig({
  displayName: 'StyledDivider',
  componentId: 'StyledDivider',
})`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  flex-shrink: 0;
  ${({ theme, orientation }) => {
    const spacing = theme.spacing?.sm ?? 8;
    if (orientation === 'vertical') {
      return `
        width: 1px;
        height: 100%;
        margin-horizontal: ${spacing}px;
      `;
    }
    return `
      width: 100%;
      height: 1px;
      margin-vertical: ${spacing}px;
    `;
  }}
`;

export { StyledDivider };


