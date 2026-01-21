/**
 * Nursing Note Model
 * File: nursing-note.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeNursingNote = (value) => normalize(value);
const normalizeNursingNoteList = (value) => normalizeList(value);

export { normalizeNursingNote, normalizeNursingNoteList };
