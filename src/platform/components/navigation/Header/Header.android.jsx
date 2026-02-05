/**
 * Header Component - Android
 * Generic header primitive: title, optional subtitle, leading/trailing slots
 * File: Header.android.jsx
 */
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '@platform/components/display/Text';
import useHeader from './useHeader';
import {
  StyledHeader,
  StyledHeaderRow,
  StyledLeadingSlot,
  StyledTitleGroup,
  StyledTrailingSlot,
} from './Header.android.styles';

/**
 * Generic Header for Android
 * @param {Object} props - Header props
 * @param {string|React.ReactNode} props.title - Header title
 * @param {string|React.ReactNode} [props.subtitle] - Optional subtitle
 * @param {React.ReactNode} [props.leadingSlot] - Leading content (e.g. back)
 * @param {React.ReactNode} [props.trailingSlot] - Trailing content (e.g. actions)
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {string} [props.testID] - Test identifier
 */
const HeaderAndroid = ({
  title,
  subtitle,
  leadingSlot,
  trailingSlot,
  accessibilityLabel,
  testID,
  ...rest
}) => {
  const { top: topInset } = useSafeAreaInsets();
  const { resolvedLabel } = useHeader({
    accessibilityLabel,
    title,
  });

  return (
    <StyledHeader
      topInset={topInset}
      accessibilityRole="header"
      accessibilityLabel={resolvedLabel}
      testID={testID}
      {...rest}
    >
      <StyledHeaderRow>
        {leadingSlot ? <StyledLeadingSlot>{leadingSlot}</StyledLeadingSlot> : null}
        <StyledTitleGroup>
          {title != null
            ? typeof title === 'string'
              ? <Text variant="h3">{title}</Text>
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

export default HeaderAndroid;
