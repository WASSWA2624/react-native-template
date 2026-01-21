/**
 * Insurance Claim API
 * File: insurance-claim.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const insuranceClaimApi = createCrudApi(endpoints.INSURANCE_CLAIMS);

export { insuranceClaimApi };
