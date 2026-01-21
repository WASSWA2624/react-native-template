/**
 * useModuleSubscription Hook
 * File: useModuleSubscription.js
 */
import useCrud from '@hooks/useCrud';
import {
  createModuleSubscription,
  deleteModuleSubscription,
  getModuleSubscription,
  listModuleSubscriptions,
  updateModuleSubscription,
} from '@features/module-subscription';

const useModuleSubscription = () =>
  useCrud({
    list: listModuleSubscriptions,
    get: getModuleSubscription,
    create: createModuleSubscription,
    update: updateModuleSubscription,
    remove: deleteModuleSubscription,
  });

export default useModuleSubscription;
