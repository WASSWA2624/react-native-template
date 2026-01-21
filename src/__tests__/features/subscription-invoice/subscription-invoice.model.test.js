/**
 * Subscription Invoice Model Tests
 * File: subscription-invoice.model.test.js
 */
import { normalizeSubscriptionInvoice, normalizeSubscriptionInvoiceList } from '@features/subscription-invoice';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('subscription-invoice.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeSubscriptionInvoice, normalizeSubscriptionInvoiceList);
  });
});
