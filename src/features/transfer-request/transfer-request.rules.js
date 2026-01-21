/**
 * Transfer Request Rules
 * File: transfer-request.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseTransferRequestId = (value) => parseId(value);
const parseTransferRequestPayload = (value) => parsePayload(value);
const parseTransferRequestListParams = (value) => parseListParams(value);

export { parseTransferRequestId, parseTransferRequestPayload, parseTransferRequestListParams };
