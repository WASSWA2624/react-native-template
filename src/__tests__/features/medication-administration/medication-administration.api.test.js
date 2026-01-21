/**
 * Medication Administration API Tests
 * File: medication-administration.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { medicationAdministrationApi } from '@features/medication-administration/medication-administration.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('medication-administration.api', () => {
  it('creates crud api with medication administration endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.MEDICATION_ADMINISTRATIONS);
    expect(medicationAdministrationApi).toBeDefined();
  });
});
