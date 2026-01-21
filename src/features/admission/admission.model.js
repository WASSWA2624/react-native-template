/**
 * Admission Model
 * File: admission.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeAdmission = (value) => normalize(value);
const normalizeAdmissionList = (value) => normalizeList(value);

export { normalizeAdmission, normalizeAdmissionList };
