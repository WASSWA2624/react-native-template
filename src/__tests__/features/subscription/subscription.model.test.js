/**
 * Subscription Model Tests
 * File: subscription.model.test.js
 */
import { normalizeSubscription, normalizeSubscriptionList } from '@features/subscription';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('subscription.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeSubscription, normalizeSubscriptionList);
  });
});
