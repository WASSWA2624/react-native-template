/**
 * Dashboard Widget Model Tests
 * File: dashboard-widget.model.test.js
 */
import { normalizeDashboardWidget, normalizeDashboardWidgetList } from '@features/dashboard-widget';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('dashboard-widget.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeDashboardWidget, normalizeDashboardWidgetList);
  });
});
