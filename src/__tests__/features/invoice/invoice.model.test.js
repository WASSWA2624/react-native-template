/**
 * Invoice Model Tests
 * File: invoice.model.test.js
 */
import { normalizeInvoice, normalizeInvoiceList } from '@features/invoice';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('invoice.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeInvoice, normalizeInvoiceList);
  });
});
