/**
 * Encounter Model
 * File: encounter.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeEncounter = (value) => normalize(value);
const normalizeEncounterList = (value) => normalizeList(value);

export { normalizeEncounter, normalizeEncounterList };
