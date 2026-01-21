/**
 * Radiology Result Rules
 * File: radiology-result.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseRadiologyResultId = (value) => parseId(value);
const parseRadiologyResultPayload = (value) => parsePayload(value);
const parseRadiologyResultListParams = (value) => parseListParams(value);

export { parseRadiologyResultId, parseRadiologyResultPayload, parseRadiologyResultListParams };
