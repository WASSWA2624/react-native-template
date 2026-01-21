/**
 * Post-Op Note Model
 * File: post-op-note.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePostOpNote = (value) => normalize(value);
const normalizePostOpNoteList = (value) => normalizeList(value);

export { normalizePostOpNote, normalizePostOpNoteList };
