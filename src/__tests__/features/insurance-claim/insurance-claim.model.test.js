/**
 * Insurance Claim Model Tests
 * File: insurance-claim.model.test.js
 */
import { normalizeInsuranceClaim, normalizeInsuranceClaimList } from '@features/insurance-claim';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('insurance-claim.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeInsuranceClaim, normalizeInsuranceClaimList);
  });
});
