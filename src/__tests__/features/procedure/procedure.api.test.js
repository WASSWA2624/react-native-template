/**
 * Procedure API Tests
 * File: procedure.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { procedureApi } from '@features/procedure/procedure.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('procedure.api', () => {
  it('creates crud api with procedure endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.PROCEDURES);
    expect(procedureApi).toBeDefined();
  });
});
