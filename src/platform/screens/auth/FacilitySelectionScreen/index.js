/**
 * FacilitySelectionScreen Export
 * File: index.js
 */
import FacilitySelectionScreenWeb from './FacilitySelectionScreen.web';
import FacilitySelectionScreenIOS from './FacilitySelectionScreen.ios';
import FacilitySelectionScreenAndroid from './FacilitySelectionScreen.android';
import { Platform } from 'react-native';

const FacilitySelectionScreen = Platform.select({
  web: FacilitySelectionScreenWeb,
  ios: FacilitySelectionScreenIOS,
  android: FacilitySelectionScreenAndroid,
  default: FacilitySelectionScreenWeb,
});

export default FacilitySelectionScreen;
