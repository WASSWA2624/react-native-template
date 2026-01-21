/**
 * Integration Log Rules Tests
 * File: integration-log.rules.test.js
 */
import {
  parseIntegrationLogId,
  parseIntegrationLogListParams,
  parseIntegrationLogPayload,
} from '@features/integration-log';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('integration-log.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseIntegrationLogId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseIntegrationLogPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseIntegrationLogListParams);
  });
});
