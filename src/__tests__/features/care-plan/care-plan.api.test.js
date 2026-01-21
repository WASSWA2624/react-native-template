/**
 * Care Plan API Tests
 * File: care-plan.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { carePlanApi } from '@features/care-plan/care-plan.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('care-plan.api', () => {
  it('creates crud api with care plan endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.CARE_PLANS);
    expect(carePlanApi).toBeDefined();
  });
});
