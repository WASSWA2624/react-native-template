/**
 * Subscription Invoice API Tests
 * File: subscription-invoice.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { subscriptionInvoiceApi } from '@features/subscription-invoice/subscription-invoice.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('subscription-invoice.api', () => {
  it('creates crud api with subscription invoice endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.SUBSCRIPTION_INVOICES);
    expect(subscriptionInvoiceApi).toBeDefined();
  });
});
