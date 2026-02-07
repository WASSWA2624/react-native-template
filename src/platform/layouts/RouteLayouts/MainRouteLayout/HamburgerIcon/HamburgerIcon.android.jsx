/**
 * HamburgerIcon - Android
 * Three-line icon for sidebar toggle (matches mobile web)
 * File: HamburgerIcon/HamburgerIcon.android.jsx
 */
import React from 'react';
import { StyledHamburgerIcon, StyledHamburgerLine } from './HamburgerIcon.android.styles';

export default function HamburgerIcon() {
  return (
    <StyledHamburgerIcon accessibilityElementsHidden>
      <StyledHamburgerLine />
      <StyledHamburgerLine />
      <StyledHamburgerLine />
    </StyledHamburgerIcon>
  );
}
