/**
 * Clinical Note API
 * File: clinical-note.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const clinicalNoteApi = createCrudApi(endpoints.CLINICAL_NOTES);

export { clinicalNoteApi };
