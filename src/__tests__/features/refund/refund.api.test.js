/**
 * Refund API Tests
 * File: refund.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { refundApi } from '@features/refund/refund.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('refund.api', () => {
  it('creates crud api with refund endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.REFUNDS);
    expect(refundApi).toBeDefined();
  });
});
