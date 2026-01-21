/**
 * Template Variable Usecase Tests
 * File: template-variable.usecase.test.js
 */
import {
  createTemplateVariable,
  deleteTemplateVariable,
  getTemplateVariable,
  listTemplateVariables,
  updateTemplateVariable,
} from '@features/template-variable';
import { templateVariableApi } from '@features/template-variable/template-variable.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/template-variable/template-variable.api', () => ({
  templateVariableApi: {
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

describe('template-variable.usecase', () => {
  beforeEach(() => {
    templateVariableApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    templateVariableApi.get.mockResolvedValue({ data: { id: '1' } });
    templateVariableApi.create.mockResolvedValue({ data: { id: '1' } });
    templateVariableApi.update.mockResolvedValue({ data: { id: '1' } });
    templateVariableApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listTemplateVariables,
      get: getTemplateVariable,
      create: createTemplateVariable,
      update: updateTemplateVariable,
      remove: deleteTemplateVariable,
    },
    { queueRequestIfOffline }
  );
});
