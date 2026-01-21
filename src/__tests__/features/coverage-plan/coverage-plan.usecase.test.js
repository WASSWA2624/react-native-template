/**
 * Coverage Plan Usecase Tests
 * File: coverage-plan.usecase.test.js
 */
import {
  listCoveragePlans,
  getCoveragePlan,
  createCoveragePlan,
  updateCoveragePlan,
  deleteCoveragePlan,
} from '@features/coverage-plan';
import { coveragePlanApi } from '@features/coverage-plan/coverage-plan.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/coverage-plan/coverage-plan.api', () => ({
  coveragePlanApi: {
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

describe('coverage-plan.usecase', () => {
  beforeEach(() => {
    coveragePlanApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    coveragePlanApi.get.mockResolvedValue({ data: { id: '1' } });
    coveragePlanApi.create.mockResolvedValue({ data: { id: '1' } });
    coveragePlanApi.update.mockResolvedValue({ data: { id: '1' } });
    coveragePlanApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listCoveragePlans,
      get: getCoveragePlan,
      create: createCoveragePlan,
      update: updateCoveragePlan,
      remove: deleteCoveragePlan,
    },
    { queueRequestIfOffline }
  );
});
