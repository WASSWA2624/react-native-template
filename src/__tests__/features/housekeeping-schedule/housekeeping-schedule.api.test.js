/**
 * Housekeeping Schedule API Tests
 * File: housekeeping-schedule.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { housekeepingScheduleApi } from '@features/housekeeping-schedule/housekeeping-schedule.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('housekeeping-schedule.api', () => {
  it('creates crud api with housekeeping schedule endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.HOUSEKEEPING_SCHEDULES);
    expect(housekeepingScheduleApi).toBeDefined();
  });
});
