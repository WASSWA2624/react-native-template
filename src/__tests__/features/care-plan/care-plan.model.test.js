/**
 * Care Plan Model Tests
 * File: care-plan.model.test.js
 */
import { normalizeCarePlan, normalizeCarePlanList } from '@features/care-plan';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('care-plan.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeCarePlan, normalizeCarePlanList);
  });
});
