/**
 * Referral Model Tests
 * File: referral.model.test.js
 */
import { normalizeReferral, normalizeReferralList } from '@features/referral';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('referral.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeReferral, normalizeReferralList);
  });
});
