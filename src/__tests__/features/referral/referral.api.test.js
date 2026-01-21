/**
 * Referral API Tests
 * File: referral.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { referralApi } from '@features/referral/referral.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('referral.api', () => {
  it('creates crud api with referral endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.REFERRALS);
    expect(referralApi).toBeDefined();
  });
});
