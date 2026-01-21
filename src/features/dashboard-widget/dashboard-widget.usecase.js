/**
 * Dashboard Widget Use Cases
 * File: dashboard-widget.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { dashboardWidgetApi } from './dashboard-widget.api';
import { normalizeDashboardWidget, normalizeDashboardWidgetList } from './dashboard-widget.model';
import {
  parseDashboardWidgetId,
  parseDashboardWidgetListParams,
  parseDashboardWidgetPayload,
} from './dashboard-widget.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listDashboardWidgets = async (params = {}) =>
  execute(async () => {
    const parsed = parseDashboardWidgetListParams(params);
    const response = await dashboardWidgetApi.list(parsed);
    return normalizeDashboardWidgetList(response.data);
  });

const getDashboardWidget = async (id) =>
  execute(async () => {
    const parsedId = parseDashboardWidgetId(id);
    const response = await dashboardWidgetApi.get(parsedId);
    return normalizeDashboardWidget(response.data);
  });

const createDashboardWidget = async (payload) =>
  execute(async () => {
    const parsed = parseDashboardWidgetPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.DASHBOARD_WIDGETS.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizeDashboardWidget(parsed);
    }
    const response = await dashboardWidgetApi.create(parsed);
    return normalizeDashboardWidget(response.data);
  });

const updateDashboardWidget = async (id, payload) =>
  execute(async () => {
    const parsedId = parseDashboardWidgetId(id);
    const parsed = parseDashboardWidgetPayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.DASHBOARD_WIDGETS.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizeDashboardWidget({ id: parsedId, ...parsed });
    }
    const response = await dashboardWidgetApi.update(parsedId, parsed);
    return normalizeDashboardWidget(response.data);
  });

const deleteDashboardWidget = async (id) =>
  execute(async () => {
    const parsedId = parseDashboardWidgetId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.DASHBOARD_WIDGETS.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizeDashboardWidget({ id: parsedId });
    }
    const response = await dashboardWidgetApi.remove(parsedId);
    return normalizeDashboardWidget(response.data);
  });

export {
  listDashboardWidgets,
  getDashboardWidget,
  createDashboardWidget,
  updateDashboardWidget,
  deleteDashboardWidget,
};
