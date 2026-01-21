/**
 * License API
 * File: license.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const licenseApi = createCrudApi(endpoints.LICENSES);

export { licenseApi };
