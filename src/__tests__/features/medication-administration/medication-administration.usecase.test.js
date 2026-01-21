/**
 * Medication Administration Usecase Tests
 * File: medication-administration.usecase.test.js
 */
import {
  listMedicationAdministrations,
  getMedicationAdministration,
  createMedicationAdministration,
  updateMedicationAdministration,
  deleteMedicationAdministration,
} from '@features/medication-administration';
import { medicationAdministrationApi } from '@features/medication-administration/medication-administration.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/medication-administration/medication-administration.api', () => ({
  medicationAdministrationApi: {
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

describe('medication-administration.usecase', () => {
  beforeEach(() => {
    medicationAdministrationApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    medicationAdministrationApi.get.mockResolvedValue({ data: { id: '1' } });
    medicationAdministrationApi.create.mockResolvedValue({ data: { id: '1' } });
    medicationAdministrationApi.update.mockResolvedValue({ data: { id: '1' } });
    medicationAdministrationApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listMedicationAdministrations,
      get: getMedicationAdministration,
      create: createMedicationAdministration,
      update: updateMedicationAdministration,
      remove: deleteMedicationAdministration,
    },
    { queueRequestIfOffline }
  );
});
