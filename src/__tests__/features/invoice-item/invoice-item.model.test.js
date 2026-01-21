/**
 * Invoice Item Model Tests
 * File: invoice-item.model.test.js
 */
import { normalizeInvoiceItem, normalizeInvoiceItemList } from '@features/invoice-item';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('invoice-item.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeInvoiceItem, normalizeInvoiceItemList);
  });
});
