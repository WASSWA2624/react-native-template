/**
 * Discharge Summary API Tests
 * File: discharge-summary.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { dischargeSummaryApi } from '@features/discharge-summary/discharge-summary.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('discharge-summary.api', () => {
  it('creates crud api with discharge summary endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.DISCHARGE_SUMMARIES);
    expect(dischargeSummaryApi).toBeDefined();
  });
});
