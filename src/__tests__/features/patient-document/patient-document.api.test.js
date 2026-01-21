/**
 * Patient Document API Tests
 * File: patient-document.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientDocumentApi } from '@features/patient-document/patient-document.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient-document.api', () => {
  it('creates crud api with patient document endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENT_DOCUMENTS);
    expect(patientDocumentApi).toBeDefined();
  });
});
