/**
 * Payment Model Tests
 * File: payment.model.test.js
 */
import { normalizePayment, normalizePaymentList } from '@features/payment';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('payment.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePayment, normalizePaymentList);
  });
});
