/**
 * Imaging Study Model
 * File: imaging-study.model.js
 */
import { createCrudModel } from '@utils/crudModel';

const { normalize, normalizeList } = createCrudModel();

const normalizeImagingStudy = (value) => normalize(value);
const normalizeImagingStudyList = (value) => normalizeList(value);

export { normalizeImagingStudy, normalizeImagingStudyList };
