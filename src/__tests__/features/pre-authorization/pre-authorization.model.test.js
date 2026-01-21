/**
 * Pre-Authorization Model Tests
 * File: pre-authorization.model.test.js
 */
import { normalizePreAuthorization, normalizePreAuthorizationList } from '@features/pre-authorization';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('pre-authorization.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizePreAuthorization, normalizePreAuthorizationList);
  });
});
