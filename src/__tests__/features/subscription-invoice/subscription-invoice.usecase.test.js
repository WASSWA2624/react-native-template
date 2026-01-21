/**
 * Subscription Invoice Usecase Tests
 * File: subscription-invoice.usecase.test.js
 */
import {
  listSubscriptionInvoices,
  getSubscriptionInvoice,
  createSubscriptionInvoice,
  updateSubscriptionInvoice,
  deleteSubscriptionInvoice,
} from '@features/subscription-invoice';
import { subscriptionInvoiceApi } from '@features/subscription-invoice/subscription-invoice.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/subscription-invoice/subscription-invoice.api', () => ({
  subscriptionInvoiceApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('subscription-invoice.usecase', () => {
  beforeEach(() => {
    subscriptionInvoiceApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    subscriptionInvoiceApi.get.mockResolvedValue({ data: { id: '1' } });
    subscriptionInvoiceApi.create.mockResolvedValue({ data: { id: '1' } });
    subscriptionInvoiceApi.update.mockResolvedValue({ data: { id: '1' } });
    subscriptionInvoiceApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listSubscriptionInvoices,
      get: getSubscriptionInvoice,
      create: createSubscriptionInvoice,
      update: updateSubscriptionInvoice,
      remove: deleteSubscriptionInvoice,
    },
    { queueRequestIfOffline }
  );
});
