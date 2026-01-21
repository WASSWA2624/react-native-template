/**
 * Subscription Invoice Rules Tests
 * File: subscription-invoice.rules.test.js
 */
import {
  parseSubscriptionInvoiceId,
  parseSubscriptionInvoiceListParams,
  parseSubscriptionInvoicePayload,
} from '@features/subscription-invoice';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('subscription-invoice.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseSubscriptionInvoiceId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseSubscriptionInvoicePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseSubscriptionInvoiceListParams);
  });
});
