/**
 * Radiology Test Rules
 * File: radiology-test.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseRadiologyTestId = (value) => parseId(value);
const parseRadiologyTestPayload = (value) => parsePayload(value);
const parseRadiologyTestListParams = (value) => parseListParams(value);

export { parseRadiologyTestId, parseRadiologyTestPayload, parseRadiologyTestListParams };
