/**
 * Dashboard Widget Model
 * File: dashboard-widget.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeDashboardWidget = (value) => normalize(value);
const normalizeDashboardWidgetList = (value) => normalizeList(value);

export { normalizeDashboardWidget, normalizeDashboardWidgetList };
