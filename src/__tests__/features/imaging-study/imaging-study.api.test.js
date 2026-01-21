/**
 * Imaging Study API Tests
 * File: imaging-study.api.test.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';
import { imagingStudyApi } from '@features/imaging-study/imaging-study.api';

jest.mock('@services/api', () => ({
  createCrudApi: jest.fn(() => ({
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  })),
}));

describe('imaging-study.api', () => {
  it('creates crud api with imaging study endpoints', () => {
    expect(createCrudApi).toHaveBeenCalledWith(endpoints.IMAGING_STUDIES);
    expect(imagingStudyApi).toBeDefined();
  });
});
