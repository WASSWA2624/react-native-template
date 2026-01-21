/**
 * Discharge Summary Model Tests
 * File: discharge-summary.model.test.js
 */
import { normalizeDischargeSummary, normalizeDischargeSummaryList } from '@features/discharge-summary';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('discharge-summary.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeDischargeSummary, normalizeDischargeSummaryList);
  });
});
