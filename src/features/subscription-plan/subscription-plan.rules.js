/**
 * Subscription Plan Rules
 * File: subscription-plan.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseSubscriptionPlanId = (value) => parseId(value);
const parseSubscriptionPlanPayload = (value) => parsePayload(value);
const parseSubscriptionPlanListParams = (value) => parseListParams(value);

export { parseSubscriptionPlanId, parseSubscriptionPlanPayload, parseSubscriptionPlanListParams };
