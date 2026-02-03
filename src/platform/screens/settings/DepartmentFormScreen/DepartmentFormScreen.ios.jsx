/**
 * DepartmentFormScreen - iOS
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
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './DepartmentFormScreen.ios.styles';
import useDepartmentFormScreen from './useDepartmentFormScreen';

const DepartmentFormScreenIOS = () => {
  const { t } = useI18n();
  const {
    isEdit,
    name,
    setName,
    departmentType,
    setDepartmentType,
    isActive,
    setIsActive,
    tenantId,
    setTenantId,
    isLoading,
    hasError,
    department,
    onSubmit,
    onCancel,
  } = useDepartmentFormScreen();

  if (isEdit && !department && isLoading) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <LoadingSpinner accessibilityLabel={t('common.loading')} testID="department-form-loading" />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (isEdit && hasError && !department) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <ErrorState
              title={t('department.form.loadError')}
              action={
                <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                  {t('common.back')}
                </Button>
              }
              testID="department-form-load-error"
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
          <Text variant="h1" accessibilityRole="header" testID="department-form-title">
            {isEdit ? t('department.form.editTitle') : t('department.form.createTitle')}
          </Text>

          {!isEdit && (
            <StyledSection>
              <TextField
                label={t('department.form.tenantIdLabel')}
                placeholder={t('department.form.tenantIdPlaceholder')}
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                accessibilityLabel={t('department.form.tenantIdLabel')}
                accessibilityHint={t('department.form.tenantIdHint')}
                testID="department-form-tenant-id"
              />
            </StyledSection>
          )}

          <StyledSection>
            <TextField
              label={t('department.form.nameLabel')}
              placeholder={t('department.form.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              accessibilityLabel={t('department.form.nameLabel')}
              accessibilityHint={t('department.form.nameHint')}
              testID="department-form-name"
            />
          </StyledSection>

          <StyledSection>
            <TextField
              label={t('department.form.typeLabel')}
              placeholder={t('department.form.typePlaceholder')}
              value={departmentType}
              onChange={(e) => setDepartmentType(e.target.value)}
              accessibilityLabel={t('department.form.typeLabel')}
              accessibilityHint={t('department.form.typeHint')}
              testID="department-form-type"
            />
          </StyledSection>

          <StyledSection>
            <Switch
              value={isActive}
              onValueChange={setIsActive}
              label={t('department.form.activeLabel')}
              accessibilityLabel={t('department.form.activeLabel')}
              accessibilityHint={t('department.form.activeHint')}
              testID="department-form-active"
            />
          </StyledSection>

          <StyledActions>
            <Button
              variant="ghost"
              onPress={onCancel}
              accessibilityLabel={t('department.form.cancel')}
              accessibilityHint={t('department.form.cancelHint')}
              testID="department-form-cancel"
            >
              {t('department.form.cancel')}
            </Button>
            <Button
              variant="primary"
              onPress={onSubmit}
              accessibilityLabel={isEdit ? t('department.form.submitEdit') : t('department.form.submitCreate')}
              testID="department-form-submit"
            >
              {isEdit ? t('department.form.submitEdit') : t('department.form.submitCreate')}
            </Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default DepartmentFormScreenIOS;
