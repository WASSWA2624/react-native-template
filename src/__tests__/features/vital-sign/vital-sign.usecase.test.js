/**
 * Vital Sign Usecase Tests
 * File: vital-sign.usecase.test.js
 */
import {
  listVitalSigns,
  getVitalSign,
  createVitalSign,
  updateVitalSign,
  deleteVitalSign,
} from '@features/vital-sign';
import { vitalSignApi } from '@features/vital-sign/vital-sign.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/vital-sign/vital-sign.api', () => ({
  vitalSignApi: {
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

describe('vital-sign.usecase', () => {
  beforeEach(() => {
    vitalSignApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    vitalSignApi.get.mockResolvedValue({ data: { id: '1' } });
    vitalSignApi.create.mockResolvedValue({ data: { id: '1' } });
    vitalSignApi.update.mockResolvedValue({ data: { id: '1' } });
    vitalSignApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listVitalSigns,
      get: getVitalSign,
      create: createVitalSign,
      update: updateVitalSign,
      remove: deleteVitalSign,
    },
    { queueRequestIfOffline }
  );
});
