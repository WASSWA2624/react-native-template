/**
 * Transfer Request API
 * File: transfer-request.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const transferRequestApi = createCrudApi(endpoints.TRANSFER_REQUESTS);

export { transferRequestApi };
