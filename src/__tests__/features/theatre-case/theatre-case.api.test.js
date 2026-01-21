/**
 * Theatre Case API Tests
 * File: theatre-case.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { theatreCaseApi } from '@features/theatre-case/theatre-case.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('theatre-case.api', () => {
  it('creates crud api with theatre case endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.THEATRE_CASES);
    expect(theatreCaseApi).toBeDefined();
  });
});
