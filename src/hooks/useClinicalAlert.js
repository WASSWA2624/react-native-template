/**
 * useClinicalAlert Hook
 * File: useClinicalAlert.js
 */
import useCrud from '@hooks/useCrud';
import {
  createClinicalAlert,
  deleteClinicalAlert,
  getClinicalAlert,
  listClinicalAlerts,
  updateClinicalAlert,
} from '@features/clinical-alert';

const useClinicalAlert = () =>
  useCrud({
    list: listClinicalAlerts,
    get: getClinicalAlert,
    create: createClinicalAlert,
    update: updateClinicalAlert,
    remove: deleteClinicalAlert,
  });

export default useClinicalAlert;
