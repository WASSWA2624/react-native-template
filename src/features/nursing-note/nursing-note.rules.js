/**
 * Nursing Note Rules
 * File: nursing-note.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseNursingNoteId = (value) => parseId(value);
const parseNursingNotePayload = (value) => parsePayload(value);
const parseNursingNoteListParams = (value) => parseListParams(value);

export { parseNursingNoteId, parseNursingNotePayload, parseNursingNoteListParams };
