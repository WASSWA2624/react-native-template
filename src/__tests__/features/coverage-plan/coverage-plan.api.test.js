/**
 * Coverage Plan API Tests
 * File: coverage-plan.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { coveragePlanApi } from '@features/coverage-plan/coverage-plan.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('coverage-plan.api', () => {
  it('creates crud api with coverage plan endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.COVERAGE_PLANS);
    expect(coveragePlanApi).toBeDefined();
  });
});
