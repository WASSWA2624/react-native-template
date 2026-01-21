/**
 * Patient Allergy API Tests
 * File: patient-allergy.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientAllergyApi } from '@features/patient-allergy/patient-allergy.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient-allergy.api', () => {
  it('creates crud api with patient allergy endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENT_ALLERGIES);
    expect(patientAllergyApi).toBeDefined();
  });
});
