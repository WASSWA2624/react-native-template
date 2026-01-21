/**
 * Patient Guardian API Tests
 * File: patient-guardian.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientGuardianApi } from '@features/patient-guardian/patient-guardian.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient-guardian.api', () => {
  it('creates crud api with patient guardian endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENT_GUARDIANS);
    expect(patientGuardianApi).toBeDefined();
  });
});
