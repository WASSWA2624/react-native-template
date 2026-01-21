/**
 * Nursing Note API
 * File: nursing-note.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const nursingNoteApi = createCrudApi(endpoints.NURSING_NOTES);

export { nursingNoteApi };
