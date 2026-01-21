/**
 * Insurance Claim API Tests
 * File: insurance-claim.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { insuranceClaimApi } from '@features/insurance-claim/insurance-claim.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('insurance-claim.api', () => {
  it('creates crud api with insurance claim endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.INSURANCE_CLAIMS);
    expect(insuranceClaimApi).toBeDefined();
  });
});
