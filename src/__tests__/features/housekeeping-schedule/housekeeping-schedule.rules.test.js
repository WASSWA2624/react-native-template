/**
 * Housekeeping Schedule Rules Tests
 * File: housekeeping-schedule.rules.test.js
 */
import {
  parseHousekeepingScheduleId,
  parseHousekeepingScheduleListParams,
  parseHousekeepingSchedulePayload,
} from '@features/housekeeping-schedule';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('housekeeping-schedule.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseHousekeepingScheduleId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseHousekeepingSchedulePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseHousekeepingScheduleListParams);
  });
});
