/**
 * Medication Administration API
 * File: medication-administration.api.js
 */
import { endpoints } from '@config/endpoints';
import { createCrudApi } from '@services/api';

const medicationAdministrationApi = createCrudApi(endpoints.MEDICATION_ADMINISTRATIONS);

export { medicationAdministrationApi };
