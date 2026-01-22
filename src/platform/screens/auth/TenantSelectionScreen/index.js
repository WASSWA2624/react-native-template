/**
 * TenantSelectionScreen Export
 * File: index.js
 */
import TenantSelectionScreenWeb from './TenantSelectionScreen.web';
import TenantSelectionScreenIOS from './TenantSelectionScreen.ios';
import TenantSelectionScreenAndroid from './TenantSelectionScreen.android';
import { Platform } from 'react-native';

const TenantSelectionScreen = Platform.select({
  web: TenantSelectionScreenWeb,
  ios: TenantSelectionScreenIOS,
  android: TenantSelectionScreenAndroid,
  default: TenantSelectionScreenWeb,
});

export default TenantSelectionScreen;
