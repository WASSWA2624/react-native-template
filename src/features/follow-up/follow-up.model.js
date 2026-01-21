/**
 * Follow Up Model
 * File: follow-up.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeFollowUp = (value) => normalize(value);
const normalizeFollowUpList = (value) => normalizeList(value);

export { normalizeFollowUp, normalizeFollowUpList };
