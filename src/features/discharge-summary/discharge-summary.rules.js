/**
 * Discharge Summary Rules
 * File: discharge-summary.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseDischargeSummaryId = (value) => parseId(value);
const parseDischargeSummaryPayload = (value) => parsePayload(value);
const parseDischargeSummaryListParams = (value) => parseListParams(value);

export { parseDischargeSummaryId, parseDischargeSummaryPayload, parseDischargeSummaryListParams };
