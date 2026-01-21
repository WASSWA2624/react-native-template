/**
 * Analytics Event API Tests
 * File: analytics-event.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { analyticsEventApi } from '@features/analytics-event/analytics-event.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('analytics-event.api', () => {
  it('creates crud api with analytics event endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.ANALYTICS_EVENTS);
    expect(analyticsEventApi).toBeDefined();
  });
});
