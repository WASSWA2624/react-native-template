/**
 * Module Subscription Model Tests
 * File: module-subscription.model.test.js
 */
import { normalizeModuleSubscription, normalizeModuleSubscriptionList } from '@features/module-subscription';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('module-subscription.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeModuleSubscription, normalizeModuleSubscriptionList);
  });
});
