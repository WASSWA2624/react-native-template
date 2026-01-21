/**
 * Report Run Rules Tests
 * File: report-run.rules.test.js
 */
import { parseReportRunId, parseReportRunListParams, parseReportRunPayload } from '@features/report-run';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('report-run.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseReportRunId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseReportRunPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseReportRunListParams);
  });
});
