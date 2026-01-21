/**
 * Ward Round API Tests
 * File: ward-round.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { wardRoundApi } from '@features/ward-round/ward-round.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('ward-round.api', () => {
  it('creates crud api with ward round endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.WARD_ROUNDS);
    expect(wardRoundApi).toBeDefined();
  });
});
