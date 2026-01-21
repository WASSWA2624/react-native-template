/**
 * Radiology Result API Tests
 * File: radiology-result.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { radiologyResultApi } from '@features/radiology-result/radiology-result.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('radiology-result.api', () => {
  it('creates crud api with radiology result endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.RADIOLOGY_RESULTS);
    expect(radiologyResultApi).toBeDefined();
  });
});
