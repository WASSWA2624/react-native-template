/**
 * Module Subscription Rules
 * File: module-subscription.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseModuleSubscriptionId = (value) => parseId(value);
const parseModuleSubscriptionPayload = (value) => parsePayload(value);
const parseModuleSubscriptionListParams = (value) => parseListParams(value);

export { parseModuleSubscriptionId, parseModuleSubscriptionPayload, parseModuleSubscriptionListParams };
