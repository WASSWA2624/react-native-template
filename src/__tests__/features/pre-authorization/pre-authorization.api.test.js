/**
 * Pre-Authorization API Tests
 * File: pre-authorization.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { preAuthorizationApi } from '@features/pre-authorization/pre-authorization.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('pre-authorization.api', () => {
  it('creates crud api with pre-authorization endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PRE_AUTHORIZATIONS);
    expect(preAuthorizationApi).toBeDefined();
  });
});
