/**
 * Bed Assignment API Tests
 * File: bed-assignment.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { bedAssignmentApi } from '@features/bed-assignment/bed-assignment.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('bed-assignment.api', () => {
  it('creates crud api with bed assignment endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.BED_ASSIGNMENTS);
    expect(bedAssignmentApi).toBeDefined();
  });
});
