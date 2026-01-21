/**
 * Clinical Note Model
 * File: clinical-note.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeClinicalNote = (value) => normalize(value);
const normalizeClinicalNoteList = (value) => normalizeList(value);

export { normalizeClinicalNote, normalizeClinicalNoteList };
