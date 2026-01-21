/**
 * Terms Acceptance API Tests
 * File: terms-acceptance.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { termsAcceptanceApi } from '@features/terms-acceptance/terms-acceptance.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('terms-acceptance.api', () => {
  it('creates crud api with terms acceptance endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.TERMS_ACCEPTANCES);
    expect(termsAcceptanceApi).toBeDefined();
  });
});
