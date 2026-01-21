/**
 * Patient Guardian Model
 * File: patient-guardian.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizePatientGuardian = (value) => normalize(value);
const normalizePatientGuardianList = (value) => normalizeList(value);

export { normalizePatientGuardian, normalizePatientGuardianList };
