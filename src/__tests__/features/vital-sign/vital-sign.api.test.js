/**
 * Vital Sign API Tests
 * File: vital-sign.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { vitalSignApi } from '@features/vital-sign/vital-sign.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('vital-sign.api', () => {
  it('creates crud api with vital sign endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.VITAL_SIGNS);
    expect(vitalSignApi).toBeDefined();
  });
});
