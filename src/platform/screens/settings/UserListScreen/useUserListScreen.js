/**
 * useUserListScreen Hook
 * Shared logic for UserListScreen across platforms.
 * File: useUserListScreen.js
 */
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { useI18n, useNetwork, useUser } from '@hooks';

const resolveErrorMessage = (t, errorCode) => {
  if (!errorCode) return null;
  const key = `errors.codes.${errorCode}`;
  const resolved = t(key);
  return resolved === key ? t('errors.codes.UNKNOWN_ERROR') : resolved;
};

const useUserListScreen = () => {
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
  } = useUser();

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

  const handleUserPress = useCallback(
    (id) => {
      router.push(`/settings/users/${id}`);
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
    onUserPress: handleUserPress,
    onDelete: handleDelete,
  };
};

export default useUserListScreen;
