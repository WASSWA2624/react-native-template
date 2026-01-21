/**
 * Report Run API
 * File: report-run.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const reportRunApi = createCrudApi(endpoints.REPORT_RUNS);

export { reportRunApi };
