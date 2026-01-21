/**
 * Imaging Study Rules
 * File: imaging-study.rules.js
 */
import { createCrudRules } from '@utils/crudRules';

const { parseId, parsePayload, parseListParams } = createCrudRules();

const parseImagingStudyId = (value) => parseId(value);
const parseImagingStudyPayload = (value) => parsePayload(value);
const parseImagingStudyListParams = (value) => parseListParams(value);

export { parseImagingStudyId, parseImagingStudyPayload, parseImagingStudyListParams };
