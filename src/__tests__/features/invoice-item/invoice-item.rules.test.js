/**
 * Invoice Item Rules Tests
 * File: invoice-item.rules.test.js
 */
import {
  parseInvoiceItemId,
  parseInvoiceItemListParams,
  parseInvoiceItemPayload,
} from '@features/invoice-item';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('invoice-item.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseInvoiceItemId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseInvoiceItemPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseInvoiceItemListParams);
  });
});
