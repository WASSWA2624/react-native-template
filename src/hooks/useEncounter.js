/**
 * useEncounter Hook
 * File: useEncounter.js
 */
import useCrud from '@hooks/useCrud';
import {
  createEncounter,
  deleteEncounter,
  getEncounter,
  listEncounters,
  updateEncounter,
} from '@features/encounter';

const useEncounter = () =>
  useCrud({
    list: listEncounters,
    get: getEncounter,
    create: createEncounter,
    update: updateEncounter,
    remove: deleteEncounter,
  });

export default useEncounter;
