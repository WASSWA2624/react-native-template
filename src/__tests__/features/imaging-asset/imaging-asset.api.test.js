/**
 * Imaging Asset API Tests
 * File: imaging-asset.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { imagingAssetApi } from '@features/imaging-asset/imaging-asset.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('imaging-asset.api', () => {
  it('creates crud api with imaging asset endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.IMAGING_ASSETS);
    expect(imagingAssetApi).toBeDefined();
  });
});
