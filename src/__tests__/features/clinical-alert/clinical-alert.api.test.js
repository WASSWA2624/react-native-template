/**
 * Clinical Alert API Tests
 * File: clinical-alert.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { clinicalAlertApi } from '@features/clinical-alert/clinical-alert.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('clinical-alert.api', () => {
  it('creates crud api with clinical alert endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.CLINICAL_ALERTS);
    expect(clinicalAlertApi).toBeDefined();
  });
});
