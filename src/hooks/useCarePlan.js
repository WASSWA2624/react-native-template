/**
 * useCarePlan Hook
 * File: useCarePlan.js
 */
import useCrud from '@hooks/useCrud';
import {
  createCarePlan,
  deleteCarePlan,
  getCarePlan,
  listCarePlans,
  updateCarePlan,
} from '@features/care-plan';

const useCarePlan = () =>
  useCrud({
    list: listCarePlans,
    get: getCarePlan,
    create: createCarePlan,
    update: updateCarePlan,
    remove: deleteCarePlan,
  });

export default useCarePlan;
