/**
 * Analytics Event Model Tests
 * File: analytics-event.model.test.js
 */
import { normalizeAnalyticsEvent, normalizeAnalyticsEventList } from '@features/analytics-event';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('analytics-event.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeAnalyticsEvent, normalizeAnalyticsEventList);
  });
});
