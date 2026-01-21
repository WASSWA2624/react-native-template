/**
 * Coverage Plan Rules
 * File: coverage-plan.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseCoveragePlanId = (value) => parseId(value);
const parseCoveragePlanPayload = (value) => parsePayload(value);
const parseCoveragePlanListParams = (value) => parseListParams(value);

export { parseCoveragePlanId, parseCoveragePlanPayload, parseCoveragePlanListParams };
