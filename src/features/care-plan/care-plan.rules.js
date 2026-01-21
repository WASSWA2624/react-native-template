/**
 * Care Plan Rules
 * File: care-plan.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseCarePlanId = (value) => parseId(value);
const parseCarePlanPayload = (value) => parsePayload(value);
const parseCarePlanListParams = (value) => parseListParams(value);

export { parseCarePlanId, parseCarePlanPayload, parseCarePlanListParams };
