/**
 * Template Usecase Tests
 * File: template.usecase.test.js
 */
import { createTemplate, deleteTemplate, getTemplate, listTemplates, updateTemplate } from '@features/template';
import { templateApi } from '@features/template/template.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/template/template.api', () => ({
  templateApi: {
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

describe('template.usecase', () => {
  beforeEach(() => {
    templateApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    templateApi.get.mockResolvedValue({ data: { id: '1' } });
    templateApi.create.mockResolvedValue({ data: { id: '1' } });
    templateApi.update.mockResolvedValue({ data: { id: '1' } });
    templateApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listTemplates,
      get: getTemplate,
      create: createTemplate,
      update: updateTemplate,
      remove: deleteTemplate,
    },
    { queueRequestIfOffline }
  );
});
