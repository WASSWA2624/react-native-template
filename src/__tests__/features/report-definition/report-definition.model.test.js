/**
 * Report Definition Model Tests
 * File: report-definition.model.test.js
 */
import { normalizeReportDefinition, normalizeReportDefinitionList } from '@features/report-definition';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('report-definition.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeReportDefinition, normalizeReportDefinitionList);
  });
});
