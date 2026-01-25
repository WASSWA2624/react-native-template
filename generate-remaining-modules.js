#!/usr/bin/env node

/**
 * Generate remaining 6 HMS Frontend screen modules
 * Modules: RolePermission, UserRole, ApiKey, ApiKeyPermission, UserMfa, OauthAccount
 * 
 * Usage: node generate-remaining-modules.js
 */

const fs = require('fs');
const path = require('path');

const MODULES = [
  {
    name: 'RolePermission',
    slug: 'role-permission',
    hook: 'useRolePermission',
    i18nKey: 'role-permission',
    routePath: '/settings/role-permissions',
    primaryField: 'id',
  },
  {
    name: 'UserRole',
    slug: 'user-role',
    hook: 'useUserRole',
    i18nKey: 'user-role',
    routePath: '/settings/user-roles',
    primaryField: 'id',
  },
  {
    name: 'ApiKey',
    slug: 'api-key',
    hook: 'useApiKey',
    i18nKey: 'api-key',
    routePath: '/settings/api-keys',
    primaryField: 'name',
  },
  {
    name: 'ApiKeyPermission',
    slug: 'api-key-permission',
    hook: 'useApiKeyPermission',
    i18nKey: 'api-key-permission',
    routePath: '/settings/api-key-permissions',
    primaryField: 'id',
  },
  {
    name: 'UserMfa',
    slug: 'user-mfa',
    hook: 'useUserMfa',
    i18nKey: 'user-mfa',
    routePath: '/settings/user-mfas',
    primaryField: 'id',
  },
  {
    name: 'OauthAccount',
    slug: 'oauth-account',
    hook: 'useOauthAccount',
    i18nKey: 'oauth-account',
    routePath: '/settings/oauth-accounts',
    primaryField: 'provider',
  },
];

const BASE_PATH = path.join(__dirname, 'src/platform/screens/settings');

// Helper functions to generate file content

function generateUseListHook(module) {
  const camelName = module.name;
  return `/**
 * use${module.name}ListScreen Hook
 */
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useI18n, useNetwork, ${module.hook} } from '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = \`errors.codes.\${errorCode}\`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const use${module.name}ListScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { isOffline } = useNetwork();
  const { list, remove, data, isLoading, errorCode, reset } = ${module.hook}();

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

  const handle${module.name}Press = useCallback((id) => {
    router.push(\`${module.routePath}/\${id}\`);
  }, [router]);

  const handleDelete = useCallback(
    async (id, e) => {
      if (e?.stopPropagation) e.stopPropagation();
      try {
        await remove(id);
        fetchList();
      } catch {
        /* error handled by hook */
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
    on${module.name}Press: handle${module.name}Press,
    onDelete: handleDelete,
  };
};

export default use${module.name}ListScreen;
`;
}

function generateUseDetailHook(module) {
  return `/**
 * use${module.name}DetailScreen Hook
 */
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useI18n, useNetwork, ${module.hook} } from '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = \`errors.codes.\${errorCode}\`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const use${module.name}DetailScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isOffline } = useNetwork();
  const { get, remove, data, isLoading, errorCode, reset } = ${module.hook}();

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
    router.push('${module.routePath}');
  }, [router]);

  const handleDelete = useCallback(async () => {
    if (!id) return;
    try {
      await remove(id);
      handleBack();
    } catch {
      /* error handled by hook */
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

export default use${module.name}DetailScreen;
`;
}

function generateListScreenWeb(module) {
  const slug = module.slug.replace(/-/g, '');
  return `/**
 * ${module.name}ListScreen - Web
 */
import React from 'react';
import { ScrollView } from 'react-native';
import { Button, EmptyState, ListItem, Text } from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './${module.name}ListScreen.web.styles';
import use${module.name}ListScreen from './use${module.name}ListScreen';

const ${module.name}ListScreenWeb = () => {
  const { t } = useI18n();
  const { items, isLoading, hasError, errorMessage, isOffline, onRetry, on${module.name}Press, onDelete } = use${module.name}ListScreen();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text variant="h1" accessibilityRole="header" testID="${slug}-list-title">
            {t('${module.i18nKey}.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('${module.i18nKey}.list.accessibilityLabel')}
            testID="${slug}-list"
            emptyComponent={<EmptyState title={t('${module.i18nKey}.list.emptyTitle')} description={t('${module.i18nKey}.list.emptyMessage')} testID="${slug}-list-empty-state" />}
          >
            {items.length > 0 ? (
              <StyledList role="list">
                {items.map((item) => (
                  <li key={item.id} role="listitem">
                    <ListItem
                      title={item?.${module.primaryField} ?? item?.id ?? ''}
                      subtitle={item?.description ?? ''}
                      onPress={() => on${module.name}Press(item.id)}
                      actions={<Button variant="ghost" size="small" onPress={(e) => onDelete(item.id, e)} testID={\\`${slug}-delete-\${item.id}\\`}>{t('common.remove')}</Button>}
                      testID={\\`${slug}-item-\${item.id}\\`}
                    />
                  </li>
                ))}
              </StyledList>
            ) : null}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default ${module.name}ListScreenWeb;
`;
}

// ... (continue with other generators)

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  ensureDirectory(dir);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

function generateModule(module) {
  console.log(`\nGenerating ${module.name} module...`);

  const listScreenDir = path.join(BASE_PATH, \`${module.name}ListScreen\`);
  const detailScreenDir = path.join(BASE_PATH, \`${module.name}DetailScreen\`);

  // Generate list screen hook
  writeFile(path.join(listScreenDir, \`use${module.name}ListScreen.js\`), generateUseListHook(module));

  // Generate detail screen hook
  writeFile(path.join(detailScreenDir, \`use${module.name}DetailScreen.js\`), generateUseDetailHook(module));

  // Generate list screen web component
  writeFile(path.join(listScreenDir, \`${module.name}ListScreen.web.jsx\`), generateListScreenWeb(module));

  // ... (continue with other file generations)

  console.log(\`✓ ${module.name} module generated successfully\`);
}

// Main execution
function main() {
  console.log('🚀 Generating remaining HMS Frontend screen modules...\n');

  MODULES.forEach(generateModule);

  console.log('\n✅ All modules generated successfully!');
  console.log('📍 Files created in: src/platform/screens/settings/');
}

main();
