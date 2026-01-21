/**
 * Patient API Tests
 * File: patient.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientApi } from '@features/patient/patient.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient.api', () => {
  it('creates crud api with patient endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENTS);
    expect(patientApi).toBeDefined();
  });
});
