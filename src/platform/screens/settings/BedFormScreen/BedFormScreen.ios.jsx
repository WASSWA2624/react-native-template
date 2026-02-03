/**
 * BedFormScreen - iOS
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
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './BedFormScreen.ios.styles';
import useBedFormScreen from './useBedFormScreen';

const BedFormScreenIOS = () => {
  const { t } = useI18n();
  const {
    isEdit,
    label,
    setLabel,
    status,
    setStatus,
    tenantId,
    setTenantId,
    facilityId,
    setFacilityId,
    wardId,
    setWardId,
    isLoading,
    hasError,
    bed,
    onSubmit,
    onCancel,
  } = useBedFormScreen();

  if (isEdit && !bed && isLoading) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <LoadingSpinner accessibilityLabel={t('common.loading')} testID="bed-form-loading" />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (isEdit && hasError && !bed) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <ErrorState
              title={t('bed.form.loadError')}
              action={
                <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                  {t('common.back')}
                </Button>
              }
              testID="bed-form-load-error"
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
          <Text variant="h1" accessibilityRole="header" testID="bed-form-title">
            {isEdit ? t('bed.form.editTitle') : t('bed.form.createTitle')}
          </Text>

          {!isEdit && (
            <>
              <StyledSection>
                <TextField
                  label={t('bed.form.tenantIdLabel')}
                  placeholder={t('bed.form.tenantIdPlaceholder')}
                  value={tenantId}
                  onChange={(e) => setTenantId(e.target.value)}
                  accessibilityLabel={t('bed.form.tenantIdLabel')}
                  testID="bed-form-tenant-id"
                />
              </StyledSection>
              <StyledSection>
                <TextField
                  label={t('bed.form.facilityIdLabel')}
                  placeholder={t('bed.form.facilityIdPlaceholder')}
                  value={facilityId}
                  onChange={(e) => setFacilityId(e.target.value)}
                  accessibilityLabel={t('bed.form.facilityIdLabel')}
                  testID="bed-form-facility-id"
                />
              </StyledSection>
              <StyledSection>
                <TextField
                  label={t('bed.form.wardIdLabel')}
                  placeholder={t('bed.form.wardIdPlaceholder')}
                  value={wardId}
                  onChange={(e) => setWardId(e.target.value)}
                  accessibilityLabel={t('bed.form.wardIdLabel')}
                  testID="bed-form-ward-id"
                />
              </StyledSection>
            </>
          )}

          <StyledSection>
            <TextField
              label={t('bed.form.labelLabel')}
              placeholder={t('bed.form.labelPlaceholder')}
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              accessibilityLabel={t('bed.form.labelLabel')}
              testID="bed-form-label"
            />
          </StyledSection>

          <StyledSection>
            <TextField
              label={t('bed.form.statusLabel')}
              placeholder={t('bed.form.statusPlaceholder')}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              accessibilityLabel={t('bed.form.statusLabel')}
              testID="bed-form-status"
            />
          </StyledSection>

          <StyledActions>
            <Button
              variant="ghost"
              onPress={onCancel}
              accessibilityLabel={t('bed.form.cancel')}
              testID="bed-form-cancel"
            >
              {t('bed.form.cancel')}
            </Button>
            <Button
              variant="primary"
              onPress={onSubmit}
              accessibilityLabel={isEdit ? t('bed.form.submitEdit') : t('bed.form.submitCreate')}
              testID="bed-form-submit"
            >
              {isEdit ? t('bed.form.submitEdit') : t('bed.form.submitCreate')}
            </Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default BedFormScreenIOS;
