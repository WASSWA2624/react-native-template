/**
 * Housekeeping Task API Tests
 * File: housekeeping-task.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { housekeepingTaskApi } from '@features/housekeeping-task/housekeeping-task.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('housekeeping-task.api', () => {
  it('creates crud api with housekeeping task endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.HOUSEKEEPING_TASKS);
    expect(housekeepingTaskApi).toBeDefined();
  });
});
