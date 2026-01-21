/**
 * Post-Op Note API
 * File: post-op-note.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const postOpNoteApi = createCrudApi(endpoints.POST_OP_NOTES);

export { postOpNoteApi };
