/**
 * Module Usecase Tests
 * File: module.usecase.test.js
 */
import { listModules, getModule, createModule, updateModule, deleteModule } from '@features/module';
import { moduleApi } from '@features/module/module.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/module/module.api', () => ({
  moduleApi: {
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

describe('module.usecase', () => {
  beforeEach(() => {
    moduleApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    moduleApi.get.mockResolvedValue({ data: { id: '1' } });
    moduleApi.create.mockResolvedValue({ data: { id: '1' } });
    moduleApi.update.mockResolvedValue({ data: { id: '1' } });
    moduleApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listModules,
      get: getModule,
      create: createModule,
      update: updateModule,
      remove: deleteModule,
    },
    { queueRequestIfOffline }
  );
});
