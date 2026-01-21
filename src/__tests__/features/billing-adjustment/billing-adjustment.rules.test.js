/**
 * Billing Adjustment Rules Tests
 * File: billing-adjustment.rules.test.js
 */
import {
  parseBillingAdjustmentId,
  parseBillingAdjustmentListParams,
  parseBillingAdjustmentPayload,
} from '@features/billing-adjustment';
import { expectIdParser, expectListParamsParser, expectPayloadParser } from '../../helpers/crud-assertions';

describe('billing-adjustment.rules', () => {
  it('parses ids', () => {
    expectIdParser(parseBillingAdjustmentId);
  });

  it('parses payloads', () => {
    expectPayloadParser(parseBillingAdjustmentPayload);
  });

  it('parses list params', () => {
    expectListParamsParser(parseBillingAdjustmentListParams);
  });
});
