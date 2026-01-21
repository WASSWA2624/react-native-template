/**
 * License Usecase Tests
 * File: license.usecase.test.js
 */
import { listLicenses, getLicense, createLicense, updateLicense, deleteLicense } from '@features/license';
import { licenseApi } from '@features/license/license.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/license/license.api', () => ({
  licenseApi: {
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

describe('license.usecase', () => {
  beforeEach(() => {
    licenseApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    licenseApi.get.mockResolvedValue({ data: { id: '1' } });
    licenseApi.create.mockResolvedValue({ data: { id: '1' } });
    licenseApi.update.mockResolvedValue({ data: { id: '1' } });
    licenseApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listLicenses,
      get: getLicense,
      create: createLicense,
      update: updateLicense,
      remove: deleteLicense,
    },
    { queueRequestIfOffline }
  );
});
