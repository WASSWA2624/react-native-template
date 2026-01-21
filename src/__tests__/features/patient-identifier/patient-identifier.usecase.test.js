/**
 * Patient Identifier Usecase Tests
 * File: patient-identifier.usecase.test.js
 */
import {
  createPatientIdentifier,
  deletePatientIdentifier,
  getPatientIdentifier,
  listPatientIdentifiers,
  updatePatientIdentifier,
} from '@features/patient-identifier';
import { patientIdentifierApi } from '@features/patient-identifier/patient-identifier.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient-identifier/patient-identifier.api', () => ({
  patientIdentifierApi: {
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

describe('patient-identifier.usecase', () => {
  beforeEach(() => {
    patientIdentifierApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientIdentifierApi.get.mockResolvedValue({ data: { id: '1' } });
    patientIdentifierApi.create.mockResolvedValue({ data: { id: '1' } });
    patientIdentifierApi.update.mockResolvedValue({ data: { id: '1' } });
    patientIdentifierApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatientIdentifiers,
      get: getPatientIdentifier,
      create: createPatientIdentifier,
      update: updatePatientIdentifier,
      remove: deletePatientIdentifier,
    },
    { queueRequestIfOffline }
  );
});
