/**
 * Diagnosis API Tests
 * File: diagnosis.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { diagnosisApi } from '@features/diagnosis/diagnosis.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('diagnosis.api', () => {
  it('creates crud api with diagnosis endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.DIAGNOSES);
    expect(diagnosisApi).toBeDefined();
  });
});
