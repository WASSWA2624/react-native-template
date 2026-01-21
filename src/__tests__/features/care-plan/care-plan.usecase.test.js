/**
 * Care Plan Usecase Tests
 * File: care-plan.usecase.test.js
 */
import {
  listCarePlans,
  getCarePlan,
  createCarePlan,
  updateCarePlan,
  deleteCarePlan,
} from '@features/care-plan';
import { carePlanApi } from '@features/care-plan/care-plan.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/care-plan/care-plan.api', () => ({
  carePlanApi: {
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

describe('care-plan.usecase', () => {
  beforeEach(() => {
    carePlanApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    carePlanApi.get.mockResolvedValue({ data: { id: '1' } });
    carePlanApi.create.mockResolvedValue({ data: { id: '1' } });
    carePlanApi.update.mockResolvedValue({ data: { id: '1' } });
    carePlanApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listCarePlans,
      get: getCarePlan,
      create: createCarePlan,
      update: updateCarePlan,
      remove: deleteCarePlan,
    },
    { queueRequestIfOffline }
  );
});
