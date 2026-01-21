/**
 * Asset API Tests
 * File: asset.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { assetApi } from '@features/asset/asset.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('asset.api', () => {
  it('creates crud api with asset endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.ASSETS);
    expect(assetApi).toBeDefined();
  });
});
