/**
 * Invoice Rules Tests
 * File: invoice.rules.test.js
 */
import { parseInvoiceId, parseInvoiceListParams, parseInvoicePayload } from '@features/invoice';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('invoice.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseInvoiceId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseInvoicePayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseInvoiceListParams);
  });
});
