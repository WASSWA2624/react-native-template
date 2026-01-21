/**
 * useClinicalNote Hook
 * File: useClinicalNote.js
 */
import useCrud from '@hooks/useCrud';
import {
  createClinicalNote,
  deleteClinicalNote,
  getClinicalNote,
  listClinicalNotes,
  updateClinicalNote,
} from '@features/clinical-note';

const useClinicalNote = () =>
  useCrud({
    list: listClinicalNotes,
    get: getClinicalNote,
    create: createClinicalNote,
    update: updateClinicalNote,
    remove: deleteClinicalNote,
  });

export default useClinicalNote;
