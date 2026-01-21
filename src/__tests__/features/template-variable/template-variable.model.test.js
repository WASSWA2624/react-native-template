/**
 * Template Variable Model Tests
 * File: template-variable.model.test.js
 */
import {
  normalizeTemplateVariable,
  normalizeTemplateVariableList,
} from '@features/template-variable';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('template-variable.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeTemplateVariable, normalizeTemplateVariableList);
  });
});
