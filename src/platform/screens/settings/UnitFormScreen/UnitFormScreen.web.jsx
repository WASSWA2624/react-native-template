/**
 * UnitFormScreen - Web
 */
import React from 'react';
import {
  Button,
  ErrorState,
  LoadingSpinner,
  Switch,
  Text,
  TextField,
} from '@platform/components';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './UnitFormScreen.web.styles';
import useUnitFormScreen from './useUnitFormScreen';

const UnitFormScreenWeb = () => {
  const { t } = useI18n();
  const {
    isEdit,
    name,
    setName,
    isActive,
    setIsActive,
    tenantId,
    setTenantId,
    isLoading,
    hasError,
    unit,
    onSubmit,
    onCancel,
  } = useUnitFormScreen();

  if (isEdit && !unit && isLoading) {
    return (
      <StyledContainer>
        <StyledContent>
          <LoadingSpinner accessibilityLabel={t('common.loading')} testID="unit-form-loading" />
        </StyledContent>
      </StyledContainer>
    );
  }

  if (isEdit && hasError && !unit) {
    return (
      <StyledContainer>
        <StyledContent>
          <ErrorState
            title={t('unit.form.loadError')}
            action={
              <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                {t('common.back')}
              </Button>
            }
            testID="unit-form-load-error"
          />
        </StyledContent>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledContent>
        <Text variant="h1" accessibilityRole="header" testID="unit-form-title">
          {isEdit ? t('unit.form.editTitle') : t('unit.form.createTitle')}
        </Text>

        {!isEdit && (
          <StyledSection>
            <TextField
              label={t('unit.form.tenantIdLabel')}
              placeholder={t('unit.form.tenantIdPlaceholder')}
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
              accessibilityLabel={t('unit.form.tenantIdLabel')}
              accessibilityHint={t('unit.form.tenantIdHint')}
              testID="unit-form-tenant-id"
            />
          </StyledSection>
        )}

        <StyledSection>
          <TextField
            label={t('unit.form.nameLabel')}
            placeholder={t('unit.form.namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            accessibilityLabel={t('unit.form.nameLabel')}
            accessibilityHint={t('unit.form.nameHint')}
            testID="unit-form-name"
          />
        </StyledSection>

        <StyledSection>
          <Switch
            value={isActive}
            onValueChange={setIsActive}
            label={t('unit.form.activeLabel')}
            accessibilityLabel={t('unit.form.activeLabel')}
            accessibilityHint={t('unit.form.activeHint')}
            testID="unit-form-active"
          />
        </StyledSection>

        <StyledActions>
          <Button
            variant="ghost"
            onPress={onCancel}
            accessibilityLabel={t('unit.form.cancel')}
            accessibilityHint={t('unit.form.cancelHint')}
            testID="unit-form-cancel"
          >
            {t('unit.form.cancel')}
          </Button>
          <Button
            variant="primary"
            onPress={onSubmit}
            accessibilityLabel={isEdit ? t('unit.form.submitEdit') : t('unit.form.submitCreate')}
            testID="unit-form-submit"
          >
            {isEdit ? t('unit.form.submitEdit') : t('unit.form.submitCreate')}
          </Button>
        </StyledActions>
      </StyledContent>
    </StyledContainer>
  );
};

export default UnitFormScreenWeb;
