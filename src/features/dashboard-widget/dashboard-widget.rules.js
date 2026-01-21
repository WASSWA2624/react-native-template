/**
 * Dashboard Widget Rules
 * File: dashboard-widget.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseDashboardWidgetId = (value) => parseId(value);
const parseDashboardWidgetPayload = (value) => parsePayload(value);
const parseDashboardWidgetListParams = (value) => parseListParams(value);

export {
  parseDashboardWidgetId,
  parseDashboardWidgetPayload,
  parseDashboardWidgetListParams,
};
