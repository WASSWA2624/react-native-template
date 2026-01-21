/**
 * Transfer Request API Tests
 * File: transfer-request.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { transferRequestApi } from '@features/transfer-request/transfer-request.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('transfer-request.api', () => {
  it('creates crud api with transfer request endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.TRANSFER_REQUESTS);
    expect(transferRequestApi).toBeDefined();
  });
});
