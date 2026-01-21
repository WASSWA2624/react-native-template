/**
 * Radiology Test API Tests
 * File: radiology-test.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { radiologyTestApi } from '@features/radiology-test/radiology-test.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('radiology-test.api', () => {
  it('creates crud api with radiology test endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.RADIOLOGY_TESTS);
    expect(radiologyTestApi).toBeDefined();
  });
});
