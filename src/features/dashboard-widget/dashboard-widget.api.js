/**
 * Dashboard Widget API
 * File: dashboard-widget.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const dashboardWidgetApi = createCrudApi(endpoints.DASHBOARD_WIDGETS);

export { dashboardWidgetApi };
