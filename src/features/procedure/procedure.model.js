/**
 * Procedure Model
 * File: procedure.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeProcedure = (value) => normalize(value);
const normalizeProcedureList = (value) => normalizeList(value);

export { normalizeProcedure, normalizeProcedureList };
