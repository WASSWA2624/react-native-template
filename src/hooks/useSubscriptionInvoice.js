/**
 * useSubscriptionInvoice Hook
 * File: useSubscriptionInvoice.js
 */
import useCrud from '@hooks/useCrud';
import {
  createSubscriptionInvoice,
  deleteSubscriptionInvoice,
  getSubscriptionInvoice,
  listSubscriptionInvoices,
  updateSubscriptionInvoice,
} from '@features/subscription-invoice';

const useSubscriptionInvoice = () =>
  useCrud({
    list: listSubscriptionInvoices,
    get: getSubscriptionInvoice,
    create: createSubscriptionInvoice,
    update: updateSubscriptionInvoice,
    remove: deleteSubscriptionInvoice,
  });

export default useSubscriptionInvoice;
