/**
 * Refund Model Tests
 * File: refund.model.test.js
 */
import { normalizeRefund, normalizeRefundList } from '@features/refund';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('refund.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeRefund, normalizeRefundList);
  });
});
