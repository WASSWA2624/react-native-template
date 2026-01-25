/**
 * COMPLETE CODE TEMPLATES FOR REMAINING 6 MODULES
 * Copy and adapt these templates for: RolePermission, UserRole, ApiKey, ApiKeyPermission, UserMfa, OauthAccount
 * 
 * Instructions:
 * 1. Copy entire "ListScreen" and "DetailScreen" templates
 * 2. Replace {MODULE_NAME} with actual names (e.g., RolePermission, ApiKey)
 * 3. Replace {module-slug} with kebab-case (e.g., role-permission, api-key)
 * 4. Replace useModuleHook with actual hook (e.g., useRolePermission, useApiKey)
 * 5. Replace {i18nKey} with i18n prefix (e.g., role-permission, api-key)
 * 6. Replace {route} with correct route (e.g., /settings/role-permissions)
 * 7. Create files in new directories and paste template content with replacements
 */

// ============================================
// TEMPLATE: use{MODULE_NAME}ListScreen.js
// ============================================
/*
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useI18n, useNetwork, useModuleHook } from '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = `errors.codes.${errorCode}`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const use{MODULE_NAME}ListScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { isOffline } = useNetwork();
  const { list, remove, data, isLoading, errorCode, reset } = useModuleHook();

  const items = useMemo(() => data?.items ?? [], [data?.items]);
  const errorMessage = useMemo(() => resolveErrorMessage(t, errorCode), [t, errorCode]);

  const fetchList = useCallback(() => {
    reset();
    list({ page: 1, limit: 20 });
  }, [list, reset]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleRetry = useCallback(() => {
    fetchList();
  }, [fetchList]);

  const handle{MODULE_NAME}Press = useCallback((id) => {
    router.push(`{route}/${id}`);
  }, [router]);

  const handleDelete = useCallback(
    async (id, e) => {
      if (e?.stopPropagation) e.stopPropagation();
      try {
        await remove(id);
        fetchList();
      } catch {
        // error handled by hook
      }
    },
    [remove, fetchList]
  );

  return {
    items,
    isLoading,
    hasError: Boolean(errorCode),
    errorMessage,
    isOffline,
    onRetry: handleRetry,
    on{MODULE_NAME}Press: handle{MODULE_NAME}Press,
    onDelete: handleDelete,
  };
};

export default use{MODULE_NAME}ListScreen;
*/

// ============================================
// TEMPLATE: use{MODULE_NAME}DetailScreen.js
// ============================================
/*
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useNetwork, useModuleHook } from '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = `errors.codes.${errorCode}`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const use{MODULE_NAME}DetailScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isOffline } = useNetwork();
  const { get, remove, data, isLoading, errorCode, reset } = useModuleHook();

  const item = data && typeof data === 'object' && !Array.isArray(data) ? data : null;
  const errorMessage = useMemo(() => resolveErrorMessage(t, errorCode), [t, errorCode]);

  const fetchDetail = useCallback(() => {
    if (!id) return;
    reset();
    get(id);
  }, [id, get, reset]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  const handleRetry = useCallback(() => {
    fetchDetail();
  }, [fetchDetail]);

  const handleBack = useCallback(() => {
    router.push('{route}');
  }, [router]);

  const handleDelete = useCallback(async () => {
    if (!id) return;
    try {
      await remove(id);
      handleBack();
    } catch {
      // error handled by hook
    }
  }, [id, remove, handleBack]);

  return {
    id,
    item,
    isLoading,
    hasError: Boolean(errorCode),
    errorMessage,
    isOffline,
    onRetry: handleRetry,
    onBack: handleBack,
    onDelete: handleDelete,
  };
};

export default use{MODULE_NAME}DetailScreen;
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.jsx
// ============================================
/*
export { default } from './{MODULE_NAME}ListScreen.web';
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.web.jsx (SHORT)
// ============================================
/*
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, EmptyState, ListItem, Text } from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './{MODULE_NAME}ListScreen.web.styles';
import use{MODULE_NAME}ListScreen from './use{MODULE_NAME}ListScreen';

const {MODULE_NAME}ListScreenWeb = () => {
  const { t } = useI18n();
  const { items, isLoading, hasError, errorMessage, isOffline, onRetry, on{MODULE_NAME}Press, onDelete } = use{MODULE_NAME}ListScreen();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text variant="h1" accessibilityRole="header" testID="{module-slug}-list-title">
            {t('{i18nKey}.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            testID="{module-slug}-list"
            emptyComponent={<EmptyState title={t('{i18nKey}.list.emptyTitle')} description={t('{i18nKey}.list.emptyMessage')} testID="{module-slug}-list-empty-state" />}
          >
            {items.length > 0 && (
              <StyledList role="list">
                {items.map((item) => (
                  <li key={item.id} role="listitem">
                    <ListItem
                      title={item?.name ?? item?.id ?? ''}
                      subtitle={item?.description ?? ''}
                      onPress={() => on{MODULE_NAME}Press(item.id)}
                      actions={<Button variant="ghost" size="small" onPress={(e) => onDelete(item.id, e)} testID={`{module-slug}-delete-${item.id}`}>{t('common.remove')}</Button>}
                      testID={`{module-slug}-item-${item.id}`}
                    />
                  </li>
                ))}
              </StyledList>
            )}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default {MODULE_NAME}ListScreenWeb;
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.android.jsx (SHORT)
// ============================================
/*
import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Button, EmptyState, ListItem, Text } from '@platform/components';
import ListScaffold from '@platform/patterns/ListScaffold/ListScaffold.android';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './{MODULE_NAME}ListScreen.android.styles';
import use{MODULE_NAME}ListScreen from './use{MODULE_NAME}ListScreen';

const {MODULE_NAME}ListScreenAndroid = () => {
  const { t } = useI18n();
  const { items, isLoading, hasError, errorMessage, isOffline, onRetry, on{MODULE_NAME}Press, onDelete } = use{MODULE_NAME}ListScreen();

  const renderItem = ({ item }) => (
    <ListItem
      title={item?.name ?? item?.id ?? ''}
      subtitle={item?.description ?? ''}
      onPress={() => on{MODULE_NAME}Press(item.id)}
      actions={<Button variant="ghost" size="small" onPress={(e) => onDelete(item.id, e)} testID={`{module-slug}-delete-${item.id}`}>{t('common.remove')}</Button>}
      testID={`{module-slug}-item-${item.id}`}
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text variant="h1" accessibilityRole="header" testID="{module-slug}-list-title">
            {t('{i18nKey}.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            testID="{module-slug}-list"
            emptyComponent={<EmptyState title={t('{i18nKey}.list.emptyTitle')} description={t('{i18nKey}.list.emptyMessage')} testID="{module-slug}-list-empty-state" />}
          >
            {items.length > 0 && (
              <StyledList>
                <FlatList
                  data={items}
                  keyExtractor={(i) => i.id}
                  renderItem={renderItem}
                  ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                  scrollEnabled={false}
                  testID="{module-slug}-list-flatlist"
                />
              </StyledList>
            )}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default {MODULE_NAME}ListScreenAndroid;
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.ios.jsx (SAME AS ANDROID)
// ============================================

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.web.styles.jsx
// ============================================
/*
import styled from 'styled-components';

const StyledContainer = styled.main`
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

const StyledContent = styled.div`
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export { StyledContainer, StyledContent, StyledList };
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.android.styles.jsx
// ============================================
/*
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

const StyledContent = styled.View`
  width: 100%;
  max-width: 800px;
  align-self: center;
`;

const StyledList = styled.View`
  width: 100%;
`;

export { StyledContainer, StyledContent, StyledList };
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen.ios.styles.jsx (SAME AS ANDROID)
// ============================================

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen/index.js
// ============================================
/*
export { default as {MODULE_NAME}ListScreen } from './{MODULE_NAME}ListScreen';
export { default as use{MODULE_NAME}ListScreen } from './use{MODULE_NAME}ListScreen';
export { STATES as {MODULE_NAME_UPPER}_LIST_STATES } from './types';
*/

// ============================================
// TEMPLATE: {MODULE_NAME}ListScreen/types.js
// ============================================
/*
export const STATES = {
  LOADING: 'loading',
  EMPTY: 'empty',
  ERROR: 'error',
  OFFLINE: 'offline',
  READY: 'ready',
};
*/

// ============================================
// TEMPLATE: {MODULE_NAME}DetailScreen.jsx
// ============================================
/*
export { default } from './{MODULE_NAME}DetailScreen.web';
*/

// ============================================
// TEMPLATE: {MODULE_NAME}DetailScreen.web.jsx (SHORT)
// ============================================
/*
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, EmptyState, ErrorState, LoadingSpinner, OfflineState, Text } from '@platform/components';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledSection, StyledActions } from './{MODULE_NAME}DetailScreen.web.styles';
import use{MODULE_NAME}DetailScreen from './use{MODULE_NAME}DetailScreen';

const {MODULE_NAME}DetailScreenWeb = () => {
  const { t } = useI18n();
  const { item, isLoading, hasError, errorMessage, isOffline, onRetry, onBack, onDelete } = use{MODULE_NAME}DetailScreen();

  if (isLoading) return (<ScrollView><StyledContainer><StyledContent><LoadingSpinner testID="{module-slug}-detail-loading" /></StyledContent></StyledContainer></ScrollView>);
  if (isOffline) return (<ScrollView><StyledContainer><StyledContent><OfflineState action={<Button onPress={onRetry}>{t('common.retry')}</Button>} testID="{module-slug}-detail-offline" /></StyledContent></StyledContainer></ScrollView>);
  if (hasError) return (<ScrollView><StyledContainer><StyledContent><ErrorState title={t('{i18nKey}.detail.errorTitle')} description={errorMessage} action={<Button onPress={onRetry}>{t('common.retry')}</Button>} testID="{module-slug}-detail-error" /></StyledContent></StyledContainer></ScrollView>);
  if (!item) return (<ScrollView><StyledContainer><StyledContent><EmptyState title={t('{i18nKey}.detail.notFoundTitle')} description={t('{i18nKey}.detail.notFoundMessage')} testID="{module-slug}-detail-not-found" /></StyledContent></StyledContainer></ScrollView>);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Button variant="ghost" onPress={onBack} testID="{module-slug}-detail-back">{t('common.back')}</Button>
          <Text variant="h1" accessibilityRole="header" testID="{module-slug}-detail-title">{item?.name ?? item?.id}</Text>
          <StyledSection>
            <Text variant="label">{t('{i18nKey}.detail.id')}</Text>
            <Text>{item?.id}</Text>
          </StyledSection>
          {item?.description && (
            <StyledSection>
              <Text variant="label">{t('{i18nKey}.detail.description')}</Text>
              <Text>{item.description}</Text>
            </StyledSection>
          )}
          <StyledActions>
            <Button variant="danger" onPress={onDelete} testID="{module-slug}-detail-delete">{t('common.delete')}</Button>
          </StyledActions>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default {MODULE_NAME}DetailScreenWeb;
*/

// For Android/iOS DetailScreen: replace ScrollView with direct view, same content structure

// ============================================
// TEMPLATE: {MODULE_NAME}DetailScreen.*styles.jsx
// ============================================
/*
WEB: import styled from 'styled-components';
NATIVE: import styled from 'styled-components/native';

const StyledContainer = styled.main`... // or styled.View for native
  flex: 1;
  width: 100%;
  min-height: 100vh; // only web
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

const StyledContent = styled.div` // or styled.View for native
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  align-self: center; // native only
`;

const StyledSection = styled.section` // or styled.View for native
  margin-top: ${({ theme }) => theme.spacing.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-width: 1; // native only
  border-color: ${({ theme }) => theme.colors.border}; // native only
`;

const StyledActions = styled.div` // or styled.View for native
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm}px;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  flex-direction: row;
  justify-content: flex-end;
`;

export { StyledContainer, StyledContent, StyledSection, StyledActions };
*/

// ============================================
// TEMPLATE: {MODULE_NAME}DetailScreen/index.js
// ============================================
/*
export { default as {MODULE_NAME}DetailScreen } from './{MODULE_NAME}DetailScreen';
export { default as use{MODULE_NAME}DetailScreen } from './use{MODULE_NAME}DetailScreen';
export { STATES as {MODULE_NAME_UPPER}_DETAIL_STATES } from './types';
*/

// ============================================
// TEMPLATE: {MODULE_NAME}DetailScreen/types.js
// ============================================
/*
export const STATES = {
  LOADING: 'loading',
  EMPTY: 'empty',
  ERROR: 'error',
  OFFLINE: 'offline',
  READY: 'ready',
  NOT_FOUND: 'notFound',
};
*/
