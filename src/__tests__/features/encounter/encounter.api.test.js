/**
 * Encounter API Tests
 * File: encounter.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { encounterApi } from '@features/encounter/encounter.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('encounter.api', () => {
  it('creates crud api with encounter endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.ENCOUNTERS);
    expect(encounterApi).toBeDefined();
  });
});
