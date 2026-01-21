/**
 * Analytics Event Rules Tests
 * File: analytics-event.rules.test.js
 */
import {
  parseAnalyticsEventId,
  parseAnalyticsEventListParams,
  parseAnalyticsEventPayload,
} from '@features/analytics-event';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('analytics-event.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseAnalyticsEventId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseAnalyticsEventPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseAnalyticsEventListParams);
  });
});
