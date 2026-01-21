/**
 * Dashboard Widget Rules Tests
 * File: dashboard-widget.rules.test.js
 */
import {
  parseDashboardWidgetId,
  parseDashboardWidgetListParams,
  parseDashboardWidgetPayload,
} from '@features/dashboard-widget';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('dashboard-widget.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseDashboardWidgetId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseDashboardWidgetPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseDashboardWidgetListParams);
  });
});
