/**
 * Subscription Plan Model
 * File: subscription-plan.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeSubscriptionPlan = (value) => normalize(value);
const normalizeSubscriptionPlanList = (value) => normalizeList(value);

export { normalizeSubscriptionPlan, normalizeSubscriptionPlanList };
