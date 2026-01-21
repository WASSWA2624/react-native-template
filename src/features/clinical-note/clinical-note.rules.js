/**
 * Clinical Note Rules
 * File: clinical-note.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseClinicalNoteId = (value) => parseId(value);
const parseClinicalNotePayload = (value) => parsePayload(value);
const parseClinicalNoteListParams = (value) => parseListParams(value);

export { parseClinicalNoteId, parseClinicalNotePayload, parseClinicalNoteListParams };
