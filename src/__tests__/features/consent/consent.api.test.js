/**
 * Consent API Tests
 * File: consent.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { consentApi } from '@features/consent/consent.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('consent.api', () => {
  it('creates crud api with consent endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.CONSENTS);
    expect(consentApi).toBeDefined();
  });
});
