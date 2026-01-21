/**
 * Patient Contact API Tests
 * File: patient-contact.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { patientContactApi } from '@features/patient-contact/patient-contact.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('patient-contact.api', () => {
  it('creates crud api with patient contact endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PATIENT_CONTACTS);
    expect(patientContactApi).toBeDefined();
  });
});
