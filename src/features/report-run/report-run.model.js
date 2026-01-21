/**
 * Report Run Model
 * File: report-run.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeReportRun = (value) => normalize(value);
const normalizeReportRunList = (value) => normalizeList(value);

export { normalizeReportRun, normalizeReportRunList };
