/**
 * Clinical Alert Usecase Tests
 * File: clinical-alert.usecase.test.js
 */
import {
  listClinicalAlerts,
  getClinicalAlert,
  createClinicalAlert,
  updateClinicalAlert,
  deleteClinicalAlert,
} from '@features/clinical-alert';
import { clinicalAlertApi } from '@features/clinical-alert/clinical-alert.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/clinical-alert/clinical-alert.api', () => ({
  clinicalAlertApi: {
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

describe('clinical-alert.usecase', () => {
  beforeEach(() => {
    clinicalAlertApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    clinicalAlertApi.get.mockResolvedValue({ data: { id: '1' } });
    clinicalAlertApi.create.mockResolvedValue({ data: { id: '1' } });
    clinicalAlertApi.update.mockResolvedValue({ data: { id: '1' } });
    clinicalAlertApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listClinicalAlerts,
      get: getClinicalAlert,
      create: createClinicalAlert,
      update: updateClinicalAlert,
      remove: deleteClinicalAlert,
    },
    { queueRequestIfOffline }
  );
});
