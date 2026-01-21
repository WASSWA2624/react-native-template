/**
 * Subscription Model
 * File: subscription.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeSubscription = (value) => normalize(value);
const normalizeSubscriptionList = (value) => normalizeList(value);

export { normalizeSubscription, normalizeSubscriptionList };
