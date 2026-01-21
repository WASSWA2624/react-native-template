/**
 * Integration API Tests
 * File: integration.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { integrationApi } from '@features/integration/integration.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('integration.api', () => {
  it('creates crud api with integration endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.INTEGRATIONS);
    expect(integrationApi).toBeDefined();
  });
});
