/**
 * Ward Round Rules Tests
 * File: ward-round.rules.test.js
 */
import { parseWardRoundId, parseWardRoundListParams, parseWardRoundPayload } from '@features/ward-round';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('ward-round.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseWardRoundId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseWardRoundPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseWardRoundListParams);
  });
});
