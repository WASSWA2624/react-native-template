/**
 * UserProfileDetailScreen - Android
 * File: UserProfileDetailScreen.android.jsx
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@platform/components';
import { useI18n } from '@hooks';
import useUserProfileDetailScreen from './useUserProfileDetailScreen';

const UserProfileDetailScreenAndroid = () => {
  const { t } = useI18n();
  useUserProfileDetailScreen();

  return <Text testID="userProfile-detail">{t('userProfile.detail.title')}</Text>;
};

export default UserProfileDetailScreenAndroid;
