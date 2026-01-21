/**
 * Dashboard Widget Usecase Tests
 * File: dashboard-widget.usecase.test.js
 */
import {
  listDashboardWidgets,
  getDashboardWidget,
  createDashboardWidget,
  updateDashboardWidget,
  deleteDashboardWidget,
} from '@features/dashboard-widget';
import { dashboardWidgetApi } from '@features/dashboard-widget/dashboard-widget.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/dashboard-widget/dashboard-widget.api', () => ({
  dashboardWidgetApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('dashboard-widget.usecase', () => {
  beforeEach(() => {
    dashboardWidgetApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    dashboardWidgetApi.get.mockResolvedValue({ data: { id: '1' } });
    dashboardWidgetApi.create.mockResolvedValue({ data: { id: '1' } });
    dashboardWidgetApi.update.mockResolvedValue({ data: { id: '1' } });
    dashboardWidgetApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listDashboardWidgets,
      get: getDashboardWidget,
      create: createDashboardWidget,
      update: updateDashboardWidget,
      remove: deleteDashboardWidget,
    },
    { queueRequestIfOffline }
  );
});
