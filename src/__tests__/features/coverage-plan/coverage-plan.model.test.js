/**
 * Coverage Plan Model Tests
 * File: coverage-plan.model.test.js
 */
import { normalizeCoveragePlan, normalizeCoveragePlanList } from '@features/coverage-plan';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('coverage-plan.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeCoveragePlan, normalizeCoveragePlanList);
  });
});
