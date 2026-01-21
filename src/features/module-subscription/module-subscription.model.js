/**
 * Module Subscription Model
 * File: module-subscription.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeModuleSubscription = (value) => normalize(value);
const normalizeModuleSubscriptionList = (value) => normalizeList(value);

export { normalizeModuleSubscription, normalizeModuleSubscriptionList };
