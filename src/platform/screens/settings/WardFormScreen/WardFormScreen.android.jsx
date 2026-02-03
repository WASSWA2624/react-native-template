/**
 * WardFormScreen - Android
 */
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  ErrorState,
  LoadingSpinner,
  Switch,
  Text,
  TextField,
} from '@platform/components';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './WardFormScreen.android.styles';
import useWardFormScreen from './useWardFormScreen';

const WardFormScreenAndroid = () => {
  const { t } = useI18n();
  const {
    isEdit,
    name,
    setName,
    wardType,
    setWardType,
    isActive,
    setIsActive,
    tenantId,
    setTenantId,
    facilityId,
    setFacilityId,
    isLoading,
    hasError,
    ward,
    onSubmit,
    onCancel,
  } = useWardFormScreen();

  if (isEdit && !ward && isLoading) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <LoadingSpinner accessibilityLabel={t('common.loading')} testID="ward-form-loading" />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (isEdit && hasError && !ward) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <ErrorState
              title={t('ward.form.loadError')}
              action={
                <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                  {t('common.back')}
                </Button>
              }
              testID="ward-form-load-error"
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
          <Text variant="h1" accessibilityRole="header" testID="ward-form-title">
            {isEdit ? t('ward.form.editTitle') : t('ward.form.createTitle')}
          </Text>

          {!isEdit && (
            <>
              <StyledSection>
                <TextField
                  label={t('ward.form.tenantIdLabel')}
                  placeholder={t('ward.form.tenantIdPlaceholder')}
                  value={tenantId}
                  onChange={(e) => setTenantId(e.target.value)}
                  accessibilityLabel={t('ward.form.tenantIdLabel')}
                  testID="ward-form-tenant-id"
                />
              </StyledSection>
              <StyledSection>
                <TextField
                  label={t('ward.form.facilityIdLabel')}
                  placeholder={t('ward.form.facilityIdPlaceholder')}
                  value={facilityId}
                  onChange={(e) => setFacilityId(e.target.value)}
                  accessibilityLabel={t('ward.form.facilityIdLabel')}
                  testID="ward-form-facility-id"
                />
              </StyledSection>
            </>
          )}

          <StyledSection>
            <TextField
              label={t('ward.form.nameLabel')}
              placeholder={t('ward.form.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              accessibilityLabel={t('ward.form.nameLabel')}
              testID="ward-form-name"
            />
          </StyledSection>

          <StyledSection>
            <TextField
              label={t('ward.form.typeLabel')}
              placeholder={t('ward.form.typePlaceholder')}
              value={wardType}
              onChange={(e) => setWardType(e.target.value)}
              accessibilityLabel={t('ward.form.typeLabel')}
              testID="ward-form-type"
            />
          </StyledSection>

          <StyledSection>
            <Switch
              value={isActive}
              onValueChange={setIsActive}
              label={t('ward.form.activeLabel')}
              accessibilityLabel={t('ward.form.activeLabel')}
              testID="ward-form-active"
            />
          </StyledSection>

          <StyledActions>
            <Button
              variant="ghost"
              onPress={onCancel}
              accessibilityLabel={t('ward.form.cancel')}
              testID="ward-form-cancel"
            >
              {t('ward.form.cancel')}
            </Button>
            <Button
              variant="primary"
              onPress={onSubmit}
              accessibilityLabel={isEdit ? t('ward.form.submitEdit') : t('ward.form.submitCreate')}
              testID="ward-form-submit"
            >
              {isEdit ? t('ward.form.submitEdit') : t('ward.form.submitCreate')}
            </Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default WardFormScreenAndroid;
