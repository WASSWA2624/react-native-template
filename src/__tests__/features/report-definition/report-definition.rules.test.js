/**
 * Report Definition Rules Tests
 * File: report-definition.rules.test.js
 */
import {
  parseReportDefinitionId,
  parseReportDefinitionListParams,
  parseReportDefinitionPayload,
} from '@features/report-definition';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('report-definition.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseReportDefinitionId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseReportDefinitionPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseReportDefinitionListParams);
  });
});
