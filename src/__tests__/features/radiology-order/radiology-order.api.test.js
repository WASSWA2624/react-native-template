/**
 * Radiology Order API Tests
 * File: radiology-order.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { radiologyOrderApi } from '@features/radiology-order/radiology-order.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('radiology-order.api', () => {
  it('creates crud api with radiology order endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.RADIOLOGY_ORDERS);
    expect(radiologyOrderApi).toBeDefined();
  });
});
