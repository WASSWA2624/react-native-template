/**
 * useCrud Hook
 * Standard async CRUD wrapper for feature usecases
 * File: useCrud.js
 */
import { useCallback, useMemo } from 'react';
import useAsyncState from '@hooks/useAsyncState';

const useCrud = (actions = {}) => {
  const { isLoading, errorCode, data, start, succeed, fail, reset } = useAsyncState();

  const run = useCallback(
    async (action, ...args) => {
      start();
      try {
        const result = await action(...args);
        succeed(result);
        return result;
      } catch (error) {
        fail(error?.code);
        // Do not rethrow: state is updated (errorCode); avoids uncaught promise rejection in useEffect callers
        return undefined;
      }
    },
    [start, succeed, fail]
  );

  const boundActions = useMemo(() => {
    return Object.entries(actions || {}).reduce((acc, [key, action]) => {
      if (typeof action !== 'function') return acc;
      acc[key] = (...args) => run(action, ...args);
      return acc;
    }, {});
  }, [actions, run]);

  return {
    isLoading,
    errorCode,
    data,
    reset,
    ...boundActions,
  };
};

export default useCrud;
