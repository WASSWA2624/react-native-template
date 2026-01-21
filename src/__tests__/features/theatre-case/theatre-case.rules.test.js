/**
 * Theatre Case Rules Tests
 * File: theatre-case.rules.test.js
 */
import { parseTheatreCaseId, parseTheatreCaseListParams, parseTheatreCasePayload } from '@features/theatre-case';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('theatre-case.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseTheatreCaseId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseTheatreCasePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseTheatreCaseListParams);
  });
});
