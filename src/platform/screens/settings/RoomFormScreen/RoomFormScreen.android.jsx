/**
 * RoomFormScreen - Android
 */
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  ErrorState,
  LoadingSpinner,
  Text,
  TextField,
} from '@platform/components';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './RoomFormScreen.android.styles';
import useRoomFormScreen from './useRoomFormScreen';

const RoomFormScreenAndroid = () => {
  const { t } = useI18n();
  const {
    isEdit,
    name,
    setName,
    floor,
    setFloor,
    tenantId,
    setTenantId,
    facilityId,
    setFacilityId,
    isLoading,
    hasError,
    room,
    onSubmit,
    onCancel,
  } = useRoomFormScreen();

  if (isEdit && !room && isLoading) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <LoadingSpinner accessibilityLabel={t('common.loading')} testID="room-form-loading" />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (isEdit && hasError && !room) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <ErrorState
              title={t('room.form.loadError')}
              action={
                <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                  {t('common.back')}
                </Button>
              }
              testID="room-form-load-error"
            />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text variant="h1" accessibilityRole="header" testID="room-form-title">
            {isEdit ? t('room.form.editTitle') : t('room.form.createTitle')}
          </Text>

          {!isEdit && (
            <>
              <StyledSection>
                <TextField
                  label={t('room.form.tenantIdLabel')}
                  placeholder={t('room.form.tenantIdPlaceholder')}
                  value={tenantId}
                  onChange={(e) => setTenantId(e.target.value)}
                  accessibilityLabel={t('room.form.tenantIdLabel')}
                  testID="room-form-tenant-id"
                />
              </StyledSection>
              <StyledSection>
                <TextField
                  label={t('room.form.facilityIdLabel')}
                  placeholder={t('room.form.facilityIdPlaceholder')}
                  value={facilityId}
                  onChange={(e) => setFacilityId(e.target.value)}
                  accessibilityLabel={t('room.form.facilityIdLabel')}
                  testID="room-form-facility-id"
                />
              </StyledSection>
            </>
          )}

          <StyledSection>
            <TextField
              label={t('room.form.nameLabel')}
              placeholder={t('room.form.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              accessibilityLabel={t('room.form.nameLabel')}
              testID="room-form-name"
            />
          </StyledSection>

          <StyledSection>
            <TextField
              label={t('room.form.floorLabel')}
              placeholder={t('room.form.floorPlaceholder')}
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              accessibilityLabel={t('room.form.floorLabel')}
              testID="room-form-floor"
            />
          </StyledSection>

          <StyledActions>
            <Button
              variant="ghost"
              onPress={onCancel}
              accessibilityLabel={t('room.form.cancel')}
              testID="room-form-cancel"
            >
              {t('room.form.cancel')}
            </Button>
            <Button
              variant="primary"
              onPress={onSubmit}
              accessibilityLabel={isEdit ? t('room.form.submitEdit') : t('room.form.submitCreate')}
              testID="room-form-submit"
            >
              {isEdit ? t('room.form.submitEdit') : t('room.form.submitCreate')}
            </Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default RoomFormScreenAndroid;
