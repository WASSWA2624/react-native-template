/**
 * Integration Rules Tests
 * File: integration.rules.test.js
 */
import {
  parseIntegrationId,
  parseIntegrationListParams,
  parseIntegrationPayload,
} from '@features/integration';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('integration.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseIntegrationId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseIntegrationPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseIntegrationListParams);
  });
});
