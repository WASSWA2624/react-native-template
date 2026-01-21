/**
 * Bed Assignment Model
 * File: bed-assignment.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeBedAssignment = (value) => normalize(value);
const normalizeBedAssignmentList = (value) => normalizeList(value);

export { normalizeBedAssignment, normalizeBedAssignmentList };
