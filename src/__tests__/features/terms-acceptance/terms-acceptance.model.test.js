/**
 * Terms Acceptance Model Tests
 * File: terms-acceptance.model.test.js
 */
import { normalizeTermsAcceptance, normalizeTermsAcceptanceList } from '@features/terms-acceptance';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('terms-acceptance.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeTermsAcceptance, normalizeTermsAcceptanceList);
  });
});
