/**
 * Insurance Claim Model
 * File: insurance-claim.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeInsuranceClaim = (value) => normalize(value);
const normalizeInsuranceClaimList = (value) => normalizeList(value);

export { normalizeInsuranceClaim, normalizeInsuranceClaimList };
