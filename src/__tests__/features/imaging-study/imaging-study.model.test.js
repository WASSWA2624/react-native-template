/**
 * Imaging Study Model Tests
 * File: imaging-study.model.test.js
 */
import { normalizeImagingStudy, normalizeImagingStudyList } from '@features/imaging-study';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('imaging-study.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeImagingStudy, normalizeImagingStudyList);
  });
});
