/**
 * Patient Identifier API Tests
 * File: patient-identifier.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientIdentifierApi } from '@features/patient-identifier/patient-identifier.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient-identifier.api', () => {
  it('creates crud api with patient identifier endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENT_IDENTIFIERS);
    expect(patientIdentifierApi).toBeDefined();
  });
});
