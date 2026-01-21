/**
 * Imaging Study Usecase Tests
 * File: imaging-study.usecase.test.js
 */
import {
  listImagingStudies,
  getImagingStudy,
  createImagingStudy,
  updateImagingStudy,
  deleteImagingStudy,
} from '@features/imaging-study';
import { imagingStudyApi } from '@features/imaging-study/imaging-study.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/imaging-study/imaging-study.api', () => ({
  imagingStudyApi: {
    list: jest.fn(),
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  },
}));

jest.mock('@offline/request', () => ({
  queueRequestIfOffline: jest.fn(),
}));

describe('imaging-study.usecase', () => {
  beforeEach(() => {
    imagingStudyApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    imagingStudyApi.get.mockResolvedValue({ data: { id: '1' } });
    imagingStudyApi.create.mockResolvedValue({ data: { id: '1' } });
    imagingStudyApi.update.mockResolvedValue({ data: { id: '1' } });
    imagingStudyApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listImagingStudies,
      get: getImagingStudy,
      create: createImagingStudy,
      update: updateImagingStudy,
      remove: deleteImagingStudy,
    },
    { queueRequestIfOffline }
  );
});
