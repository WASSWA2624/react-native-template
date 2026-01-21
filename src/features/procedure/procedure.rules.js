/**
 * Procedure Rules
 * File: procedure.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseProcedureId = (value) => parseId(value);
const parseProcedurePayload = (value) => parsePayload(value);
const parseProcedureListParams = (value) => parseListParams(value);

export { parseProcedureId, parseProcedurePayload, parseProcedureListParams };
