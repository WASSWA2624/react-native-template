/**
 * Template Model Tests
 * File: template.model.test.js
 */
import { normalizeTemplate, normalizeTemplateList } from '@features/template';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('template.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeTemplate, normalizeTemplateList);
  });
});
