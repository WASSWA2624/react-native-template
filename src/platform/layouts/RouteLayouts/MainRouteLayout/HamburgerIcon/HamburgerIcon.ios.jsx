/**
 * HamburgerIcon - iOS
 * Three-line icon for sidebar toggle (matches mobile web)
 * File: HamburgerIcon/HamburgerIcon.ios.jsx
 */
import React from 'react';
import { StyledHamburgerIcon, StyledHamburgerLine } from './HamburgerIcon.ios.styles';

export default function HamburgerIcon() {
  return (
    <StyledHamburgerIcon accessibilityElementsHidden>
      <StyledHamburgerLine />
      <StyledHamburgerLine />
      <StyledHamburgerLine />
    </StyledHamburgerIcon>
  );
}
