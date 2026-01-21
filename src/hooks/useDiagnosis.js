/**
 * useDiagnosis Hook
 * File: useDiagnosis.js
 */
import useCrud from '@hooks/useCrud';
import {
  createDiagnosis,
  deleteDiagnosis,
  getDiagnosis,
  listDiagnoses,
  updateDiagnosis,
} from '@features/diagnosis';

const useDiagnosis = () =>
  useCrud({
    list: listDiagnoses,
    get: getDiagnosis,
    create: createDiagnosis,
    update: updateDiagnosis,
    remove: deleteDiagnosis,
  });

export default useDiagnosis;
