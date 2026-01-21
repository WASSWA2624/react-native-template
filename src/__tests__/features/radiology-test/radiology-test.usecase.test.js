/**
 * Radiology Test Usecase Tests
 * File: radiology-test.usecase.test.js
 */
import {
  listRadiologyTests,
  getRadiologyTest,
  createRadiologyTest,
  updateRadiologyTest,
  deleteRadiologyTest,
} from '@features/radiology-test';
import { radiologyTestApi } from '@features/radiology-test/radiology-test.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/radiology-test/radiology-test.api', () => ({
  radiologyTestApi: {
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

describe('radiology-test.usecase', () => {
  beforeEach(() => {
    radiologyTestApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    radiologyTestApi.get.mockResolvedValue({ data: { id: '1' } });
    radiologyTestApi.create.mockResolvedValue({ data: { id: '1' } });
    radiologyTestApi.update.mockResolvedValue({ data: { id: '1' } });
    radiologyTestApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listRadiologyTests,
      get: getRadiologyTest,
      create: createRadiologyTest,
      update: updateRadiologyTest,
      remove: deleteRadiologyTest,
    },
    { queueRequestIfOffline }
  );
});
