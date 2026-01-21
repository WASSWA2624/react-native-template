/**
 * Patient Guardian Usecase Tests
 * File: patient-guardian.usecase.test.js
 */
import {
  createPatientGuardian,
  deletePatientGuardian,
  getPatientGuardian,
  listPatientGuardians,
  updatePatientGuardian,
} from '@features/patient-guardian';
import { patientGuardianApi } from '@features/patient-guardian/patient-guardian.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient-guardian/patient-guardian.api', () => ({
  patientGuardianApi: {
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

describe('patient-guardian.usecase', () => {
  beforeEach(() => {
    patientGuardianApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientGuardianApi.get.mockResolvedValue({ data: { id: '1' } });
    patientGuardianApi.create.mockResolvedValue({ data: { id: '1' } });
    patientGuardianApi.update.mockResolvedValue({ data: { id: '1' } });
    patientGuardianApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatientGuardians,
      get: getPatientGuardian,
      create: createPatientGuardian,
      update: updatePatientGuardian,
      remove: deletePatientGuardian,
    },
    { queueRequestIfOffline }
  );
});
