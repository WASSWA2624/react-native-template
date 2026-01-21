/**
 * Follow Up Rules Tests
 * File: follow-up.rules.test.js
 */
import { parseFollowUpId, parseFollowUpListParams, parseFollowUpPayload } from '@features/follow-up';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('follow-up.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseFollowUpId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseFollowUpPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseFollowUpListParams);
  });
});
