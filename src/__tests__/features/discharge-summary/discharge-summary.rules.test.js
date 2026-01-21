/**
 * Discharge Summary Rules Tests
 * File: discharge-summary.rules.test.js
 */
import {
  parseDischargeSummaryId,
  parseDischargeSummaryListParams,
  parseDischargeSummaryPayload,
} from '@features/discharge-summary';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('discharge-summary.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseDischargeSummaryId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseDischargeSummaryPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseDischargeSummaryListParams);
  });
});
