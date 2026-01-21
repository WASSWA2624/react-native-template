/**
 * Insurance Claim Rules
 * File: insurance-claim.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseInsuranceClaimId = (value) => parseId(value);
const parseInsuranceClaimPayload = (value) => parsePayload(value);
const parseInsuranceClaimListParams = (value) => parseListParams(value);

export { parseInsuranceClaimId, parseInsuranceClaimPayload, parseInsuranceClaimListParams };
