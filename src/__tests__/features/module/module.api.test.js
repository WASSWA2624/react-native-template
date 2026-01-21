/**
 * Module API Tests
 * File: module.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { moduleApi } from '@features/module/module.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('module.api', () => {
  it('creates crud api with module endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.MODULES);
    expect(moduleApi).toBeDefined();
  });
});
