/**
 * AddressFormScreen - Web
 */
import React from 'react';
import {
  Button,
  ErrorState,
  LoadingSpinner,
  Text,
  TextField,
} from '@platform/components';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './AddressFormScreen.web.styles';
import useAddressFormScreen from './useAddressFormScreen';

const AddressFormScreenWeb = () => {
  const { t } = useI18n();
  const {
    isEdit,
    line1,
    setLine1,
    city,
    setCity,
    country,
    setCountry,
    tenantId,
    setTenantId,
    isLoading,
    hasError,
    address,
    onSubmit,
    onCancel,
  } = useAddressFormScreen();

  if (isEdit && !address && isLoading) {
    return (
      <StyledContainer>
        <StyledContent>
          <LoadingSpinner accessibilityLabel={t('common.loading')} testID="address-form-loading" />
        </StyledContent>
      </StyledContainer>
    );
  }

  if (isEdit && hasError && !address) {
    return (
      <StyledContainer>
        <StyledContent>
          <ErrorState
            title={t('address.form.loadError')}
            action={
              <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                {t('common.back')}
              </Button>
            }
            testID="address-form-load-error"
          />
        </StyledContent>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledContent>
        <Text variant="h1" accessibilityRole="header" testID="address-form-title">
          {isEdit ? t('address.form.editTitle') : t('address.form.createTitle')}
        </Text>

        {!isEdit && (
          <StyledSection>
            <TextField
              label={t('address.form.tenantIdLabel')}
              placeholder={t('address.form.tenantIdPlaceholder')}
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
              accessibilityLabel={t('address.form.tenantIdLabel')}
              accessibilityHint={t('address.form.tenantIdHint')}
              testID="address-form-tenant-id"
            />
          </StyledSection>
        )}

        <StyledSection>
          <TextField
            label={t('address.form.line1Label')}
            placeholder={t('address.form.line1Placeholder')}
            value={line1}
            onChange={(e) => setLine1(e.target.value)}
            accessibilityLabel={t('address.form.line1Label')}
            accessibilityHint={t('address.form.line1Hint')}
            testID="address-form-line1"
          />
        </StyledSection>

        <StyledSection>
          <TextField
            label={t('address.form.cityLabel')}
            placeholder={t('address.form.cityPlaceholder')}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            accessibilityLabel={t('address.form.cityLabel')}
            accessibilityHint={t('address.form.cityHint')}
            testID="address-form-city"
          />
        </StyledSection>

        <StyledSection>
          <TextField
            label={t('address.form.countryLabel')}
            placeholder={t('address.form.countryPlaceholder')}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            accessibilityLabel={t('address.form.countryLabel')}
            accessibilityHint={t('address.form.countryHint')}
            testID="address-form-country"
          />
        </StyledSection>

        <StyledActions>
          <Button
            variant="ghost"
            onPress={onCancel}
            accessibilityLabel={t('address.form.cancel')}
            accessibilityHint={t('address.form.cancelHint')}
            testID="address-form-cancel"
          >
            {t('address.form.cancel')}
          </Button>
          <Button
            variant="primary"
            onPress={onSubmit}
            accessibilityLabel={isEdit ? t('address.form.submitEdit') : t('address.form.submitCreate')}
            testID="address-form-submit"
          >
            {isEdit ? t('address.form.submitEdit') : t('address.form.submitCreate')}
          </Button>
        </StyledActions>
      </StyledContent>
    </StyledContainer>
  );
};

export default AddressFormScreenWeb;
