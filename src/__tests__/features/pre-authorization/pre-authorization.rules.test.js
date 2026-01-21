/**
 * Pre-Authorization Rules Tests
 * File: pre-authorization.rules.test.js
 */
import {
  parsePreAuthorizationId,
  parsePreAuthorizationListParams,
  parsePreAuthorizationPayload,
} from '@features/pre-authorization';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('pre-authorization.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePreAuthorizationId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePreAuthorizationPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePreAuthorizationListParams);
  });
});
