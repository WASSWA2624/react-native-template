/**
 * Subscription Rules
 * File: subscription.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseSubscriptionId = (value) => parseId(value);
const parseSubscriptionPayload = (value) => parsePayload(value);
const parseSubscriptionListParams = (value) => parseListParams(value);

export { parseSubscriptionId, parseSubscriptionPayload, parseSubscriptionListParams };
