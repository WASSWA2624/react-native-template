/**
 * Post-Op Note Rules
 * File: post-op-note.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parsePostOpNoteId = (value) => parseId(value);
const parsePostOpNotePayload = (value) => parsePayload(value);
const parsePostOpNoteListParams = (value) => parseListParams(value);

export { parsePostOpNoteId, parsePostOpNotePayload, parsePostOpNoteListParams };
