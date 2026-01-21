/**
 * Discharge Summary Model
 * File: discharge-summary.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeDischargeSummary = (value) => normalize(value);
const normalizeDischargeSummaryList = (value) => normalizeList(value);

export { normalizeDischargeSummary, normalizeDischargeSummaryList };
