/**
 * Payment Rules Tests
 * File: payment.rules.test.js
 */
import { parsePaymentId, parsePaymentListParams, parsePaymentPayload } from '@features/payment';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('payment.rules', () => {
  it('parses ids', () => {
    expectIdParser(parsePaymentId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parsePaymentPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parsePaymentListParams);
  });
});
