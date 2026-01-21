/**
 * PACS Link Usecase Tests
 * File: pacs-link.usecase.test.js
 */
import { listPacsLinks, getPacsLink, createPacsLink, updatePacsLink, deletePacsLink } from '@features/pacs-link';
import { pacsLinkApi } from '@features/pacs-link/pacs-link.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/pacs-link/pacs-link.api', () => ({
  pacsLinkApi: {
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

describe('pacs-link.usecase', () => {
  beforeEach(() => {
    pacsLinkApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    pacsLinkApi.get.mockResolvedValue({ data: { id: '1' } });
    pacsLinkApi.create.mockResolvedValue({ data: { id: '1' } });
    pacsLinkApi.update.mockResolvedValue({ data: { id: '1' } });
    pacsLinkApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPacsLinks,
      get: getPacsLink,
      create: createPacsLink,
      update: updatePacsLink,
      remove: deletePacsLink,
    },
    { queueRequestIfOffline }
  );
});
