/**
 * Payment API Tests
 * File: payment.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { paymentApi } from '@features/payment/payment.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('payment.api', () => {
  it('creates crud api with payment endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PAYMENTS);
    expect(paymentApi).toBeDefined();
  });
});
