/**
 * Procedure Usecase Tests
 * File: procedure.usecase.test.js
 */
import {
  listProcedures,
  getProcedure,
  createProcedure,
  updateProcedure,
  deleteProcedure,
} from '@features/procedure';
import { procedureApi } from '@features/procedure/procedure.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/procedure/procedure.api', () => ({
  procedureApi: {
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

describe('procedure.usecase', () => {
  beforeEach(() => {
    procedureApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    procedureApi.get.mockResolvedValue({ data: { id: '1' } });
    procedureApi.create.mockResolvedValue({ data: { id: '1' } });
    procedureApi.update.mockResolvedValue({ data: { id: '1' } });
    procedureApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listProcedures,
      get: getProcedure,
      create: createProcedure,
      update: updateProcedure,
      remove: deleteProcedure,
    },
    { queueRequestIfOffline }
  );
});
