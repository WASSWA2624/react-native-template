/**
 * Coverage Plan Model
 * File: coverage-plan.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeCoveragePlan = (value) => normalize(value);
const normalizeCoveragePlanList = (value) => normalizeList(value);

export { normalizeCoveragePlan, normalizeCoveragePlanList };
