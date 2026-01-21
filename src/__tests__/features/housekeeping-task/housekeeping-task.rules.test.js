/**
 * Housekeeping Task Rules Tests
 * File: housekeeping-task.rules.test.js
 */
import {
  parseHousekeepingTaskId,
  parseHousekeepingTaskListParams,
  parseHousekeepingTaskPayload,
} from '@features/housekeeping-task';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('housekeeping-task.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseHousekeepingTaskId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseHousekeepingTaskPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseHousekeepingTaskListParams);
  });
});
