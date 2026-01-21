/**
 * Dashboard Widget API Tests
 * File: dashboard-widget.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { dashboardWidgetApi } from '@features/dashboard-widget/dashboard-widget.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('dashboard-widget.api', () => {
  it('creates crud api with dashboard widget endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.DASHBOARD_WIDGETS);
    expect(dashboardWidgetApi).toBeDefined();
  });
});
