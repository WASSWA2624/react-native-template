/**
 * useSubscription Hook
 * File: useSubscription.js
 */
import useCrud from '@hooks/useCrud';
import {
  createSubscription,
  deleteSubscription,
  getSubscription,
  listSubscriptions,
  updateSubscription,
} from '@features/subscription';

const useSubscription = () =>
  useCrud({
    list: listSubscriptions,
    get: getSubscription,
    create: createSubscription,
    update: updateSubscription,
    remove: deleteSubscription,
  });

export default useSubscription;
