/**
 * useProcedure Hook
 * File: useProcedure.js
 */
import useCrud from '@hooks/useCrud';
import {
  createProcedure,
  deleteProcedure,
  getProcedure,
  listProcedures,
  updateProcedure,
} from '@features/procedure';

const useProcedure = () =>
  useCrud({
    list: listProcedures,
    get: getProcedure,
    create: createProcedure,
    update: updateProcedure,
    remove: deleteProcedure,
  });

export default useProcedure;
