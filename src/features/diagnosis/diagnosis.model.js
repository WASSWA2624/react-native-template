/**
 * Diagnosis Model
 * File: diagnosis.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeDiagnosis = (value) => normalize(value);
const normalizeDiagnosisList = (value) => normalizeList(value);

export { normalizeDiagnosis, normalizeDiagnosisList };
