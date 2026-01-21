/**
 * Integration Model Tests
 * File: integration.model.test.js
 */
import { normalizeIntegration, normalizeIntegrationList } from '@features/integration';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('integration.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeIntegration, normalizeIntegrationList);
  });
});
