/**
 * Bed Assignment Rules
 * File: bed-assignment.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseBedAssignmentId = (value) => parseId(value);
const parseBedAssignmentPayload = (value) => parsePayload(value);
const parseBedAssignmentListParams = (value) => parseListParams(value);

export { parseBedAssignmentId, parseBedAssignmentPayload, parseBedAssignmentListParams };
