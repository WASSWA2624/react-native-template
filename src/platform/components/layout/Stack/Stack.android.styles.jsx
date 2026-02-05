/**
 * Stack Android Styles
 * File: Stack.android.styles.jsx
 */

import styled from 'styled-components/native';

const LAYOUT_PROPS = ['direction', 'spacing', 'align', 'justify', 'wrap'];
const StyledStack = styled.View.withConfig({
  displayName: 'StyledStack',
  componentId: 'StyledStack',
  shouldForwardProp: (prop) => !LAYOUT_PROPS.includes(prop),
})`
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  gap: ${({ theme, spacing }) => theme.spacing?.[spacing] || theme.spacing?.md || 0}px;
`;

export { StyledStack };


