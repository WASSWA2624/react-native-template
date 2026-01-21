/**
 * Report Run Model Tests
 * File: report-run.model.test.js
 */
import { normalizeReportRun, normalizeReportRunList } from '@features/report-run';
import { expectModelNormalizers } from '../../helpers/crud-assertions';

describe('report-run.model', () => {
  it('normalizes entity and list', () => {
    expectModelNormalizers(normalizeReportRun, normalizeReportRunList);
  });
});
