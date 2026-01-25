#!/usr/bin/env node
/**
 * Generate all remaining Step 11.1 screen implementations
 * Creates screens for: user-profile, role, permission, role-permission, user-role, api-key, api-key-permission, user-mfa, oauth-account
 */

const fs = require('fs');
const path = require('path');

const MODULES = [
  { key: 'userProfile', name: 'UserProfile', featureHook: 'useUserProfile' },
  { key: 'role', name: 'Role', featureHook: 'useRole' },
  { key: 'permission', name: 'Permission', featureHook: 'usePermission' },
  { key: 'rolePermission', name: 'RolePermission', featureHook: 'useRolePermission' },
  { key: 'userRole', name: 'UserRole', featureHook: 'useUserRole' },
  { key: 'apiKey', name: 'ApiKey', featureHook: 'useApiKey' },
  { key: 'apiKeyPermission', name: 'ApiKeyPermission', featureHook: 'useApiKeyPermission' },
  { key: 'userMfa', name: 'UserMfa', featureHook: 'useUserMfa' },
  { key: 'oauthAccount', name: 'OauthAccount', featureHook: 'useOauthAccount' },
];

const SCREENS_PATH = path.join(__dirname, 'src/platform/screens/settings');

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function generateUseListScreenHook(module) {
  const { name, featureHook, key } = module;
  return `/**
 * use${name}ListScreen Hook
 * Shared logic for ${name}ListScreen across platforms.
 * File: use${name}ListScreen.js
 */
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useI18n, useNetwork, ${featureHook} } from '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = \`errors.codes.\${errorCode}\`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const use${name}ListScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { isOffline } = useNetwork();
  const {
    list,
    remove,
    data,
    isLoading,
    errorCode,
    reset,
  } = ${featureHook}();

  const items = useMemo(() => data?.items ?? [], [data?.items]);
  const errorMessage = useMemo(
    () => resolveErrorMessage(t, errorCode),
    [t, errorCode]
  );

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

  const handleItemPress = useCallback(
    (id) => {
      router.push(\`/settings/${key.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1)}s/\${id}\`);
    },
    [router]
  );

  const handleDelete = useCallback(
    async (id, e) => {
      if (e) e.stopPropagation();
      if (confirm(t('common.confirmDelete'))) {
        await remove(id);
      }
    },
    [remove, t]
  );

  return {
    items,
    isLoading,
    hasError: !!errorCode,
    errorMessage,
    isOffline,
    onRetry: handleRetry,
    onItemPress: handleItemPress,
    onDelete: handleDelete,
  };
};

export default use${name}ListScreen;
`;
}

function generateUseDetailScreenHook(module) {
  const { name, featureHook } = module;
  return `/**
 * use${name}DetailScreen Hook
 * Shared logic for ${name}DetailScreen across platforms.
 * File: use${name}DetailScreen.js
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useI18n, useNetwork, ${featureHook} } = '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = \`errors.codes.\${errorCode}\`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const use${name}DetailScreen = () => {
  const { t } = useI18n();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isOffline } = useNetwork();
  const [isEditing, setIsEditing] = useState(false);
  const {
    get,
    update,
    data,
    isLoading,
    errorCode,
    reset,
  } = ${featureHook}();

  const item = useMemo(() => data?.item, [data?.item]);
  const errorMessage = useMemo(
    () => resolveErrorMessage(t, errorCode),
    [t, errorCode]
  );

  const fetchItem = useCallback(() => {
    if (id) {
      reset();
      get(id);
    }
  }, [id, get, reset]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const handleRetry = useCallback(() => {
    fetchItem();
  }, [fetchItem]);

  const handleSave = useCallback(
    async (formData) => {
      if (id) {
        await update(id, formData);
        setIsEditing(false);
      }
    },
    [id, update]
  );

  const handleCancel = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  return {
    item,
    isLoading,
    hasError: !!errorCode,
    errorMessage,
    isOffline,
    isEditing,
    onRetry: handleRetry,
    onSave: handleSave,
    onCancel: handleCancel,
    onEdit: handleEdit,
  };
};

export default use${name}DetailScreen;
`;
}

function generateListScreenWeb(module) {
  const { name, key } = module;
  const i18nKey = key.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1);
  return `/**
 * ${name}ListScreen - Web
 * File: ${name}ListScreen.web.jsx
 */
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent, StyledList } from './${name}ListScreen.web.styles';
import use${name}ListScreen from './use${name}ListScreen';

const ${name}ListScreenWeb = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onItemPress,
    onDelete,
  } = use${name}ListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('${i18nKey}.list.emptyTitle')}
      description={t('${i18nKey}.list.emptyMessage')}
      testID="${i18nKey}-list-empty-state"
    />
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledContent>
          <Text
            variant="h1"
            accessibilityRole="header"
            testID="${i18nKey}-list-title"
          >
            {t('${i18nKey}.list.title')}
          </Text>
          <ListScaffold
            isLoading={isLoading}
            isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
            hasError={hasError}
            error={errorMessage}
            isOffline={isOffline}
            onRetry={onRetry}
            accessibilityLabel={t('${i18nKey}.list.accessibilityLabel')}
            testID="${i18nKey}-list"
            emptyComponent={emptyComponent}
          >
            {items.length > 0 ? (
              <StyledList role="list">
                {items.map((item) => {
                  const title = item?.name ?? item?.id ?? '';
                  return (
                    <li key={item.id} role="listitem">
                      <ListItem
                        title={title}
                        onPress={() => onItemPress(item.id)}
                        actions={
                          <Button
                            variant="ghost"
                            size="small"
                            onPress={(e) => onDelete(item.id, e)}
                            accessibilityLabel={t('${i18nKey}.list.delete')}
                            accessibilityHint={t('${i18nKey}.list.deleteHint')}
                            testID={\`${i18nKey}-delete-\${item.id}\`}
                          >
                            {t('common.remove')}
                          </Button>
                        }
                        accessibilityLabel={t('${i18nKey}.list.itemLabel', {
                          name: title,
                        })}
                        testID={\`${i18nKey}-item-\${item.id}\`}
                      />
                    </li>
                  );
                })}
              </StyledList>
            ) : null}
          </ListScaffold>
        </StyledContent>
      </StyledContainer>
    </ScrollView>
  );
};

export default ${name}ListScreenWeb;
`;
}

function generateListScreenAndroid(module) {
  const { name, key } = module;
  const i18nKey = key.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1);
  return `/**
 * ${name}ListScreen - Android
 * File: ${name}ListScreen.android.jsx
 */
import React from 'react';
import { FlatList } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent } from './${name}ListScreen.android.styles';
import use${name}ListScreen from './use${name}ListScreen';

const ${name}ListScreenAndroid = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onItemPress,
    onDelete,
  } = use${name}ListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('${i18nKey}.list.emptyTitle')}
      description={t('${i18nKey}.list.emptyMessage')}
      testID="${i18nKey}-list-empty-state"
    />
  );

  const renderItem = ({ item }) => {
    const title = item?.name ?? item?.id ?? '';
    return (
      <ListItem
        title={title}
        onPress={() => onItemPress(item.id)}
        actions={
          <Button
            variant="ghost"
            size="small"
            onPress={(e) => onDelete(item.id, e)}
            accessibilityLabel={t('${i18nKey}.list.delete')}
            accessibilityHint={t('${i18nKey}.list.deleteHint')}
            testID={\`${i18nKey}-delete-\${item.id}\`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('${i18nKey}.list.itemLabel', {
          name: title,
        })}
        testID={\`${i18nKey}-item-\${item.id}\`}
      />
    );
  };

  return (
    <StyledContainer>
      <StyledContent>
        <Text
          variant="h1"
          accessibilityRole="header"
          testID="${i18nKey}-list-title"
        >
          {t('${i18nKey}.list.title')}
        </Text>
        <ListScaffold
          isLoading={isLoading}
          isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
          hasError={hasError}
          error={errorMessage}
          isOffline={isOffline}
          onRetry={onRetry}
          accessibilityLabel={t('${i18nKey}.list.accessibilityLabel')}
          testID="${i18nKey}-list"
          emptyComponent={emptyComponent}
        >
          {items.length > 0 ? (
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : null}
        </ListScaffold>
      </StyledContent>
    </StyledContainer>
  );
};

export default ${name}ListScreenAndroid;
`;
}

function generateListScreenIos(module) {
  const { name, key } = module;
  const i18nKey = key.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1);
  return `/**
 * ${name}ListScreen - iOS
 * File: ${name}ListScreen.ios.jsx
 */
import React from 'react';
import { FlatList } from 'react-native';
import {
  Button,
  EmptyState,
  ListItem,
  Text,
} from '@platform/components';
import { ListScaffold } from '@platform/patterns';
import { useI18n } from '@hooks';
import { StyledContainer, StyledContent } from './${name}ListScreen.ios.styles';
import use${name}ListScreen from './use${name}ListScreen';

const ${name}ListScreenIos = () => {
  const { t } = useI18n();
  const {
    items,
    isLoading,
    hasError,
    errorMessage,
    isOffline,
    onRetry,
    onItemPress,
    onDelete,
  } = use${name}ListScreen();

  const emptyComponent = (
    <EmptyState
      title={t('${i18nKey}.list.emptyTitle')}
      description={t('${i18nKey}.list.emptyMessage')}
      testID="${i18nKey}-list-empty-state"
    />
  );

  const renderItem = ({ item }) => {
    const title = item?.name ?? item?.id ?? '';
    return (
      <ListItem
        title={title}
        onPress={() => onItemPress(item.id)}
        actions={
          <Button
            variant="ghost"
            size="small"
            onPress={(e) => onDelete(item.id, e)}
            accessibilityLabel={t('${i18nKey}.list.delete')}
            accessibilityHint={t('${i18nKey}.list.deleteHint')}
            testID={\`${i18nKey}-delete-\${item.id}\`}
          >
            {t('common.remove')}
          </Button>
        }
        accessibilityLabel={t('${i18nKey}.list.itemLabel', {
          name: title,
        })}
        testID={\`${i18nKey}-item-\${item.id}\`}
      />
    );
  };

  return (
    <StyledContainer>
      <StyledContent>
        <Text
          variant="h1"
          accessibilityRole="header"
          testID="${i18nKey}-list-title"
        >
          {t('${i18nKey}.list.title')}
        </Text>
        <ListScaffold
          isLoading={isLoading}
          isEmpty={!isLoading && !hasError && !isOffline && items.length === 0}
          hasError={hasError}
          error={errorMessage}
          isOffline={isOffline}
          onRetry={onRetry}
          accessibilityLabel={t('${i18nKey}.list.accessibilityLabel')}
          testID="${i18nKey}-list"
          emptyComponent={emptyComponent}
        >
          {items.length > 0 ? (
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : null}
        </ListScaffold>
      </StyledContent>
    </StyledContainer>
  );
};

export default ${name}ListScreenIos;
`;
}

function generateListScreenPlatformAgnostic(module) {
  const { name } = module;
  return `/**
 * ${name}ListScreen
 * Platform-agnostic export
 * File: ${name}ListScreen.jsx
 */
export { default } from './${name}ListScreen.web';
`;
}

function generateWebStyles(module) {
  const { name } = module;
  return `/**
 * ${name}ListScreen Web Styles
 * File: ${name}ListScreen.web.styles.jsx
 */
import styled from 'styled-components';

const StyledContainer = styled.main.withConfig({
  displayName: 'StyledContainer',
  componentId: 'StyledContainer',
})\`
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background-color: \${({ theme }) => theme.colors.background};
  padding: \${({ theme }) => theme.spacing.xl}px;
\`;

const StyledContent = styled.div.withConfig({
  displayName: 'StyledContent',
  componentId: 'StyledContent',
})\`
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
\`;

const StyledList = styled.ul.withConfig({
  displayName: 'StyledList',
  componentId: 'StyledList',
})\`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: \${({ theme }) => theme.spacing.lg}px;

  & > li {
    margin-bottom: \${({ theme }) => theme.spacing.md}px;
  }
\`;

export { StyledContainer, StyledContent, StyledList };
`;
}

function generateAndroidStyles(module) {
  const { name } = module;
  return `/**
 * ${name}ListScreen Android Styles
 * File: ${name}ListScreen.android.styles.jsx
 */
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

const StyledContainer = styled.View\`
  flex: 1;
  background-color: \${({ theme }) => theme.colors.background};
  padding-vertical: \${({ theme }) => theme.spacing.lg}px;
  padding-horizontal: \${({ theme }) => theme.spacing.lg}px;
\`;

const StyledContent = styled.View\`
  flex: 1;
  width: 100%;
\`;

export { StyledContainer, StyledContent, styles };
`;
}

function generateIosStyles(module) {
  const { name } = module;
  return `/**
 * ${name}ListScreen iOS Styles
 * File: ${name}ListScreen.ios.styles.jsx
 */
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

const StyledContainer = styled.View\`
  flex: 1;
  background-color: \${({ theme }) => theme.colors.background};
  padding-vertical: \${({ theme }) => theme.spacing.lg}px;
  padding-horizontal: \${({ theme }) => theme.spacing.lg}px;
\`;

const StyledContent = styled.View\`
  flex: 1;
  width: 100%;
\`;

export { StyledContainer, StyledContent, styles };
`;
}

function generateIndexFile() {
  return `/**
 * Screens Index
 * Central export for all screen components
 */
export { default as UserListScreen } from './UserListScreen';
export { default as UserDetailScreen } from './UserDetailScreen';
export { default as UserProfileListScreen } from './UserProfileListScreen';
export { default as UserProfileDetailScreen } from './UserProfileDetailScreen';
export { default as RoleListScreen } from './RoleListScreen';
export { default as RoleDetailScreen } from './RoleDetailScreen';
export { default as PermissionListScreen } from './PermissionListScreen';
export { default as PermissionDetailScreen } from './PermissionDetailScreen';
export { default as RolePermissionListScreen } from './RolePermissionListScreen';
export { default as RolePermissionDetailScreen } from './RolePermissionDetailScreen';
export { default as UserRoleListScreen } from './UserRoleListScreen';
export { default as UserRoleDetailScreen } from './UserRoleDetailScreen';
export { default as ApiKeyListScreen } from './ApiKeyListScreen';
export { default as ApiKeyDetailScreen } from './ApiKeyDetailScreen';
export { default as ApiKeyPermissionListScreen } from './ApiKeyPermissionListScreen';
export { default as ApiKeyPermissionDetailScreen } from './ApiKeyPermissionDetailScreen';
export { default as UserMfaListScreen } from './UserMfaListScreen';
export { default as UserMfaDetailScreen } from './UserMfaDetailScreen';
export { default as OauthAccountListScreen } from './OauthAccountListScreen';
export { default as OauthAccountDetailScreen } from './OauthAccountDetailScreen';
export { default as TenantListScreen } from './TenantListScreen';
export { default as TenantDetailScreen } from './TenantDetailScreen';
export { default as FacilityListScreen } from './FacilityListScreen';
export { default as FacilityDetailScreen } from './FacilityDetailScreen';
export { default as BranchListScreen } from './BranchListScreen';
export { default as BranchDetailScreen } from './BranchDetailScreen';
export { default as DepartmentListScreen } from './DepartmentListScreen';
export { default as DepartmentDetailScreen } from './DepartmentDetailScreen';
export { default as UnitListScreen } from './UnitListScreen';
export { default as UnitDetailScreen } from './UnitDetailScreen';
export { default as RoomListScreen } from './RoomListScreen';
export { default as RoomDetailScreen } from './RoomDetailScreen';
export { default as WardListScreen } from './WardListScreen';
export { default as WardDetailScreen } from './WardDetailScreen';
export { default as BedListScreen } from './BedListScreen';
export { default as BedDetailScreen } from './BedDetailScreen';
export { default as AddressListScreen } from './AddressListScreen';
export { default as AddressDetailScreen } from './AddressDetailScreen';
export { default as ContactListScreen } from './ContactListScreen';
export { default as ContactDetailScreen } from './ContactDetailScreen';
export { default as UserSessionListScreen } from './UserSessionListScreen';
export { default as UserSessionDetailScreen } from './UserSessionDetailScreen';
`;
}

// Main generation
console.log('🚀 Generating screens for 10 remaining Step 11.1 modules...\n');

MODULES.forEach((module) => {
  console.log(`📝 Creating screens for: ${module.name}`);

  // Create directories
  const listScreenDir = path.join(SCREENS_PATH, `${module.name}ListScreen`);
  const detailScreenDir = path.join(SCREENS_PATH, `${module.name}DetailScreen`);

  createDirectory(listScreenDir);
  createDirectory(detailScreenDir);

  // Generate list screen files
  fs.writeFileSync(
    path.join(listScreenDir, `use${module.name}ListScreen.js`),
    generateUseListScreenHook(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.web.jsx`),
    generateListScreenWeb(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.android.jsx`),
    generateListScreenAndroid(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.ios.jsx`),
    generateListScreenIos(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.jsx`),
    generateListScreenPlatformAgnostic(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.web.styles.jsx`),
    generateWebStyles(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.android.styles.jsx`),
    generateAndroidStyles(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, `${module.name}ListScreen.ios.styles.jsx`),
    generateIosStyles(module)
  );

  fs.writeFileSync(
    path.join(listScreenDir, 'index.js'),
    `export { default } from './${module.name}ListScreen';\n`
  );

  fs.writeFileSync(
    path.join(listScreenDir, 'types.js'),
    `// ${module.name}ListScreen types\nexport const LIST_SCREEN_TYPES = {};\n`
  );

  // Generate detail screen files (simplified versions)
  fs.writeFileSync(
    path.join(detailScreenDir, `use${module.name}DetailScreen.js`),
    generateUseDetailScreenHook(module)
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.jsx`),
    `/**\n * ${module.name}DetailScreen\n * Platform-agnostic export\n * File: ${module.name}DetailScreen.jsx\n */\nexport { default } from './${module.name}DetailScreen.web';\n`
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.web.jsx`),
    `/**\n * ${module.name}DetailScreen - Web\n * File: ${module.name}DetailScreen.web.jsx\n */\nimport React from 'react';\nimport { Text } from '@platform/components';\nimport { useI18n } from '@hooks';\nimport use${module.name}DetailScreen from './use${module.name}DetailScreen';\n\nconst ${module.name}DetailScreenWeb = () => {\n  const { t } = useI18n();\n  use${module.name}DetailScreen();\n\n  return <Text testID="${module.key}-detail">{t('${module.key}.detail.title')}</Text>;\n};\n\nexport default ${module.name}DetailScreenWeb;\n`
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.android.jsx`),
    `/**\n * ${module.name}DetailScreen - Android\n * File: ${module.name}DetailScreen.android.jsx\n */\nimport React from 'react';\nimport { View } from 'react-native';\nimport { Text } from '@platform/components';\nimport { useI18n } from '@hooks';\nimport use${module.name}DetailScreen from './use${module.name}DetailScreen';\n\nconst ${module.name}DetailScreenAndroid = () => {\n  const { t } = useI18n();\n  use${module.name}DetailScreen();\n\n  return <Text testID="${module.key}-detail">{t('${module.key}.detail.title')}</Text>;\n};\n\nexport default ${module.name}DetailScreenAndroid;\n`
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.ios.jsx`),
    `/**\n * ${module.name}DetailScreen - iOS\n * File: ${module.name}DetailScreen.ios.jsx\n */\nimport React from 'react';\nimport { View } from 'react-native';\nimport { Text } from '@platform/components';\nimport { useI18n } from '@hooks';\nimport use${module.name}DetailScreen from './use${module.name}DetailScreen';\n\nconst ${module.name}DetailScreenIos = () => {\n  const { t } = useI18n();\n  use${module.name}DetailScreen();\n\n  return <Text testID="${module.key}-detail">{t('${module.key}.detail.title')}</Text>;\n};\n\nexport default ${module.name}DetailScreenIos;\n`
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.web.styles.jsx`),
    generateWebStyles(module)
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.android.styles.jsx`),
    generateAndroidStyles(module)
  );

  fs.writeFileSync(
    path.join(detailScreenDir, `${module.name}DetailScreen.ios.styles.jsx`),
    generateIosStyles(module)
  );

  fs.writeFileSync(
    path.join(detailScreenDir, 'index.js'),
    `export { default } from './${module.name}DetailScreen';\n`
  );

  fs.writeFileSync(
    path.join(detailScreenDir, 'types.js'),
    `// ${module.name}DetailScreen types\nexport const DETAIL_SCREEN_TYPES = {};\n`
  );

  console.log(`✅ ${module.name} screens created\n`);
});

// Update settings index
const settingsIndexPath = path.join(SCREENS_PATH, 'index.js');
fs.writeFileSync(settingsIndexPath, generateIndexFile());

console.log('✨ All 10 modules generated successfully!');
console.log(`📄 Updated: ${settingsIndexPath}`);
