/**
 * Pre-Authorization Usecase Tests
 * File: pre-authorization.usecase.test.js
 */
import {
  listPreAuthorizations,
  getPreAuthorization,
  createPreAuthorization,
  updatePreAuthorization,
  deletePreAuthorization,
} from '@features/pre-authorization';
import { preAuthorizationApi } from '@features/pre-authorization/pre-authorization.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/pre-authorization/pre-authorization.api', () => ({
  preAuthorizationApi: {
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

describe('pre-authorization.usecase', () => {
  beforeEach(() => {
    preAuthorizationApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    preAuthorizationApi.get.mockResolvedValue({ data: { id: '1' } });
    preAuthorizationApi.create.mockResolvedValue({ data: { id: '1' } });
    preAuthorizationApi.update.mockResolvedValue({ data: { id: '1' } });
    preAuthorizationApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPreAuthorizations,
      get: getPreAuthorization,
      create: createPreAuthorization,
      update: updatePreAuthorization,
      remove: deletePreAuthorization,
    },
    { queueRequestIfOffline }
  );
});
