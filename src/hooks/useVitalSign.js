/**
 * useVitalSign Hook
 * File: useVitalSign.js
 */
import useCrud from '@hooks/useCrud';
import {
  createVitalSign,
  deleteVitalSign,
  getVitalSign,
  listVitalSigns,
  updateVitalSign,
} from '@features/vital-sign';

const useVitalSign = () =>
  useCrud({
    list: listVitalSigns,
    get: getVitalSign,
    create: createVitalSign,
    update: updateVitalSign,
    remove: deleteVitalSign,
  });

export default useVitalSign;
