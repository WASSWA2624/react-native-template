/**
 * Report Definition API Tests
 * File: report-definition.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { reportDefinitionApi } from '@features/report-definition/report-definition.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('report-definition.api', () => {
  it('creates crud api with report definition endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.REPORT_DEFINITIONS);
    expect(reportDefinitionApi).toBeDefined();
  });
});
