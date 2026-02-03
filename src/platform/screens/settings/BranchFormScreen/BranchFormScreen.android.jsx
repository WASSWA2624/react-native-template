/**
 * BranchFormScreen - Android
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
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './BranchFormScreen.android.styles';
import useBranchFormScreen from './useBranchFormScreen';

const BranchFormScreenAndroid = () => {
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
    branch,
    onSubmit,
    onCancel,
  } = useBranchFormScreen();

  if (isEdit && !branch && isLoading) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <LoadingSpinner accessibilityLabel={t('common.loading')} testID="branch-form-loading" />
          </StyledContent>
        </StyledContainer>
      </ScrollView>
    );
  }

  if (isEdit && hasError && !branch) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StyledContainer>
          <StyledContent>
            <ErrorState
              title={t('branch.form.loadError')}
              action={
                <Button variant="primary" onPress={onCancel} accessibilityLabel={t('common.back')}>
                  {t('common.back')}
                </Button>
              }
              testID="branch-form-load-error"
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
          <Text variant="h1" accessibilityRole="header" testID="branch-form-title">
            {isEdit ? t('branch.form.editTitle') : t('branch.form.createTitle')}
          </Text>

          {!isEdit && (
            <StyledSection>
              <TextField
                label={t('branch.form.tenantIdLabel')}
                placeholder={t('branch.form.tenantIdPlaceholder')}
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                accessibilityLabel={t('branch.form.tenantIdLabel')}
                accessibilityHint={t('branch.form.tenantIdHint')}
                testID="branch-form-tenant-id"
              />
            </StyledSection>
          )}

          <StyledSection>
            <TextField
              label={t('branch.form.nameLabel')}
              placeholder={t('branch.form.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              accessibilityLabel={t('branch.form.nameLabel')}
              accessibilityHint={t('branch.form.nameHint')}
              testID="branch-form-name"
            />
          </StyledSection>

          <StyledSection>
            <Switch
              value={isActive}
              onValueChange={setIsActive}
              label={t('branch.form.activeLabel')}
              accessibilityLabel={t('branch.form.activeLabel')}
              accessibilityHint={t('branch.form.activeHint')}
              testID="branch-form-active"
            />
          </StyledSection>

          <StyledActions>
            <Button
              variant="ghost"
              onPress={onCancel}
              accessibilityLabel={t('branch.form.cancel')}
              accessibilityHint={t('branch.form.cancelHint')}
              testID="branch-form-cancel"
            >
              {t('branch.form.cancel')}
            </Button>
            <Button
              variant="primary"
              onPress={onSubmit}
              accessibilityLabel={isEdit ? t('branch.form.submitEdit') : t('branch.form.submitCreate')}
              testID="branch-form-submit"
            >
              {isEdit ? t('branch.form.submitEdit') : t('branch.form.submitCreate')}
            </Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default BranchFormScreenAndroid;
