/**
 * Patient Allergy Usecase Tests
 * File: patient-allergy.usecase.test.js
 */
import {
  createPatientAllergy,
  deletePatientAllergy,
  getPatientAllergy,
  listPatientAllergies,
  updatePatientAllergy,
} from '@features/patient-allergy';
import { patientAllergyApi } from '@features/patient-allergy/patient-allergy.api';
import { queueRequestIfOffline } from '@offline/request';
import { runCrudUsecaseTests } from '../../helpers/crud-usecase-runner';

jest.mock('@features/patient-allergy/patient-allergy.api', () => ({
  patientAllergyApi: {
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

describe('patient-allergy.usecase', () => {
  beforeEach(() => {
    patientAllergyApi.list.mockResolvedValue({ data: [{ id: '1' }] });
    patientAllergyApi.get.mockResolvedValue({ data: { id: '1' } });
    patientAllergyApi.create.mockResolvedValue({ data: { id: '1' } });
    patientAllergyApi.update.mockResolvedValue({ data: { id: '1' } });
    patientAllergyApi.remove.mockResolvedValue({ data: { id: '1' } });
  });

  runCrudUsecaseTests(
    {
      list: listPatientAllergies,
      get: getPatientAllergy,
      create: createPatientAllergy,
      update: updatePatientAllergy,
      remove: deletePatientAllergy,
    },
    { queueRequestIfOffline }
  );
});
