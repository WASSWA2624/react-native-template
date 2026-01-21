/**
 * Consent Model Tests
 * File: consent.model.test.js
 */
import { normalizeConsent, normalizeConsentList } from '@features/consent';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('consent.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeConsent, normalizeConsentList);
  });
});
