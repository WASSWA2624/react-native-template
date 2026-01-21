/**
 * Asset Service Log API Tests
 * File: asset-service-log.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { assetServiceLogApi } from '@features/asset-service-log/asset-service-log.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('asset-service-log.api', () => {
  it('creates crud api with asset service log endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.ASSET_SERVICE_LOGS);
    expect(assetServiceLogApi).toBeDefined();
  });
});
