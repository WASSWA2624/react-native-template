/**
 * Admission API Tests
 * File: admission.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { admissionApi } from '@features/admission/admission.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('admission.api', () => {
  it('creates crud api with admission endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.ADMISSIONS);
    expect(admissionApi).toBeDefined();
  });
});
