/**
 * Anesthesia Record API
 * File: anesthesia-record.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const anesthesiaRecordApi = createCrudApi(endpoints.ANESTHESIA_RECORDS);

export { anesthesiaRecordApi };
