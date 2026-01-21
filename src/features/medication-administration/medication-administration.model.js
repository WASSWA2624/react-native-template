/**
 * Medication Administration Model
 * File: medication-administration.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeMedicationAdministration = (value) => normalize(value);
const normalizeMedicationAdministrationList = (value) => normalizeList(value);

export { normalizeMedicationAdministration, normalizeMedicationAdministrationList };
