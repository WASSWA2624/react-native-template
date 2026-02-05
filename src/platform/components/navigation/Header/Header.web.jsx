/**
 * Header Component - Web
 * Generic header primitive: title, optional subtitle, leading/trailing slots
 * File: Header.web.jsx
 */
import React from 'react';
import Text from '@platform/components/display/Text';
import useHeader from './useHeader';
import {
  StyledHeader,
  StyledHeaderRow,
  StyledLeadingSlot,
  StyledTitleGroup,
  StyledTrailingSlot,
} from './Header.web.styles';

/**
 * Generic Header for Web
 * @param {Object} props - Header props
 * @param {string|React.ReactNode} props.title - Header title
 * @param {string|React.ReactNode} [props.subtitle] - Optional subtitle
 * @param {React.ReactNode} [props.leadingSlot] - Leading content (e.g. back)
 * @param {React.ReactNode} [props.trailingSlot] - Trailing content (e.g. actions)
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {string} [props.testID] - Test identifier
 * @param {string} [props.className] - Additional CSS class
 */
const HeaderWeb = ({
  title,
  subtitle,
  leadingSlot,
  trailingSlot,
  accessibilityLabel,
  testID,
  className,
  ...rest
}) => {
  const { resolvedLabel } = useHeader({
    accessibilityLabel,
    title,
  });

  return (
    <StyledHeader
      role="banner"
      aria-label={resolvedLabel}
      data-testid={testID}
      testID={testID}
      className={className}
      {...rest}
    >
      <StyledHeaderRow>
        {leadingSlot ? <StyledLeadingSlot>{leadingSlot}</StyledLeadingSlot> : null}
        <StyledTitleGroup>
          {title != null
            ? typeof title === 'string'
              ? <Text variant="h2">{title}</Text>
              : title
            : null}
          {subtitle != null
            ? typeof subtitle === 'string'
              ? (
                <Text variant="caption" color="text.secondary">
                  {subtitle}
                </Text>
              )
              : subtitle
            : null}
        </StyledTitleGroup>
        {trailingSlot ? <StyledTrailingSlot>{trailingSlot}</StyledTrailingSlot> : null}
      </StyledHeaderRow>
    </StyledHeader>
  );
};

export default HeaderWeb;
