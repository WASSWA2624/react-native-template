/**
 * Subscription Plan Model Tests
 * File: subscription-plan.model.test.js
 */
import { normalizeSubscriptionPlan, normalizeSubscriptionPlanList } from '@features/subscription-plan';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('subscription-plan.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeSubscriptionPlan, normalizeSubscriptionPlanList);
  });
});
