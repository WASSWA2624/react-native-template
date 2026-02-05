/**
 * Divider Web Styles
 * Styled-components for Web platform
 * File: Divider.web.styles.jsx
 */

import styled from 'styled-components';

const StyledDivider = styled.hr.withConfig({
  displayName: 'StyledDivider',
  componentId: 'StyledDivider',
})`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border: none;
  flex-shrink: 0;
  ${({ theme, orientation }) => {
    const spacing = theme.spacing?.sm ?? 8;
    if (orientation === 'vertical') {
      return `
        width: 1px;
        height: 100%;
        margin: 0 ${spacing}px;
      `;
    }
    return `
      width: 100%;
      height: 1px;
      margin: ${spacing}px 0;
    `;
  }}
`;

export { StyledDivider };


