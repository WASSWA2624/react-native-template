/**
 * Patient Medical History API Tests
 * File: patient-medical-history.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientMedicalHistoryApi } from '@features/patient-medical-history/patient-medical-history.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient-medical-history.api', () => {
  it('creates crud api with patient medical history endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENT_MEDICAL_HISTORIES);
    expect(patientMedicalHistoryApi).toBeDefined();
  });
});
