/**
 * Transfer Request Model
 * File: transfer-request.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeTransferRequest = (value) => normalize(value);
const normalizeTransferRequestList = (value) => normalizeList(value);

export { normalizeTransferRequest, normalizeTransferRequestList };
