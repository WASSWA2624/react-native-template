/**
 * Anesthesia Record Rules
 * File: anesthesia-record.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseAnesthesiaRecordId = (value) => parseId(value);
const parseAnesthesiaRecordPayload = (value) => parsePayload(value);
const parseAnesthesiaRecordListParams = (value) => parseListParams(value);

export { parseAnesthesiaRecordId, parseAnesthesiaRecordPayload, parseAnesthesiaRecordListParams };
