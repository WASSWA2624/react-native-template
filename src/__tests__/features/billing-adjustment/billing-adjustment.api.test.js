/**
 * Billing Adjustment API Tests
 * File: billing-adjustment.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { billingAdjustmentApi } from '@features/billing-adjustment/billing-adjustment.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('billing-adjustment.api', () => {
  it('creates crud api with billing adjustment endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.BILLING_ADJUSTMENTS);
    expect(billingAdjustmentApi).toBeDefined();
  });
});
