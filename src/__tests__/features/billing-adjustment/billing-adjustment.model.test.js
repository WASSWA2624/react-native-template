/**
 * Billing Adjustment Model Tests
 * File: billing-adjustment.model.test.js
 */
import { normalizeBillingAdjustment, normalizeBillingAdjustmentList } from '@features/billing-adjustment';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('billing-adjustment.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeBillingAdjustment, normalizeBillingAdjustmentList);
  });
});
