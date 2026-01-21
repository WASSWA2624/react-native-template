/**
 * Integration Log API Tests
 * File: integration-log.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { integrationLogApi } from '@features/integration-log/integration-log.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('integration-log.api', () => {
  it('creates crud api with integration log endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.INTEGRATION_LOGS);
    expect(integrationLogApi).toBeDefined();
  });
});
