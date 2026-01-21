/**
 * Diagnosis Usecase Tests
 * File: diagnosis.usecase.test.js
 */
import {
  listDiagnoses,
  getDiagnosis,
  createDiagnosis,
  updateDiagnosis,
  deleteDiagnosis,
} from '@features/diagnosis';
import { diagnosisApi } from '@features/diagnosis/diagnosis.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/diagnosis/diagnosis.api', () => ({
  diagnosisApi: {
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

describe('diagnosis.usecase', () => {
  beforeEach(() => {
    diagnosisApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    diagnosisApi.get.mockResolvedValue({ data: { id: '1' } });
    diagnosisApi.create.mockResolvedValue({ data: { id: '1' } });
    diagnosisApi.update.mockResolvedValue({ data: { id: '1' } });
    diagnosisApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listDiagnoses,
      get: getDiagnosis,
      create: createDiagnosis,
      update: updateDiagnosis,
      remove: deleteDiagnosis,
    },
    { queueRequestIfOffline }
  );
});
