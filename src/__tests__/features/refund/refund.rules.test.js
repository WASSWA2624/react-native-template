/**
 * Refund Rules Tests
 * File: refund.rules.test.js
 */
import { parseRefundId, parseRefundListParams, parseRefundPayload } from '@features/refund';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('refund.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseRefundId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseRefundPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseRefundListParams);
  });
});
