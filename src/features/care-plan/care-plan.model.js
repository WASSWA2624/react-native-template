/**
 * Care Plan Model
 * File: care-plan.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeCarePlan = (value) => normalize(value);
const normalizeCarePlanList = (value) => normalizeList(value);

export { normalizeCarePlan, normalizeCarePlanList };
