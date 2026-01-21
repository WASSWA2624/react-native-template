/**
 * License API Tests
 * File: license.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { licenseApi } from '@features/license/license.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('license.api', () => {
  it('creates crud api with license endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.LICENSES);
    expect(licenseApi).toBeDefined();
  });
});
