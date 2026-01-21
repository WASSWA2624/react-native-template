/**
 * Radiology Result Usecase Tests
 * File: radiology-result.usecase.test.js
 */
import {
  listRadiologyResults,
  getRadiologyResult,
  createRadiologyResult,
  updateRadiologyResult,
  deleteRadiologyResult,
} from '@features/radiology-result';
import { radiologyResultApi } from '@features/radiology-result/radiology-result.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/radiology-result/radiology-result.api', () => ({
  radiologyResultApi: {
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

describe('radiology-result.usecase', () => {
  beforeEach(() => {
    radiologyResultApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    radiologyResultApi.get.mockResolvedValue({ data: { id: '1' } });
    radiologyResultApi.create.mockResolvedValue({ data: { id: '1' } });
    radiologyResultApi.update.mockResolvedValue({ data: { id: '1' } });
    radiologyResultApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listRadiologyResults,
      get: getRadiologyResult,
      create: createRadiologyResult,
      update: updateRadiologyResult,
      remove: deleteRadiologyResult,
    },
    { queueRequestIfOffline }
  );
});
