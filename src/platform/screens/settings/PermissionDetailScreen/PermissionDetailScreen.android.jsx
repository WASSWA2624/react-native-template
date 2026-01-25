/**
 * PermissionDetailScreen - Android
 * File: PermissionDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import usePermissionDetailScreen from './usePermissionDetailScreen';

const PermissionDetailScreenAndroid = () => {
  const { t } = useI18n();
  usePermissionDetailScreen();

  return <Text testID="permission-detail">{t('permission.detail.title')}</Text>;
};

export default PermissionDetailScreenAndroid;
