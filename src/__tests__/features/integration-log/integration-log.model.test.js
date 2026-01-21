/**
 * Integration Log Model Tests
 * File: integration-log.model.test.js
 */
import { normalizeIntegrationLog, normalizeIntegrationLogList } from '@features/integration-log';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('integration-log.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeIntegrationLog, normalizeIntegrationLogList);
  });
});
