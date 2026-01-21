/**
 * Imaging Study API
 * File: imaging-study.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const imagingStudyApi = createCrudApi(endpoints.IMAGING_STUDIES);

export { imagingStudyApi };
