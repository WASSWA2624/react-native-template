/**
 * useFollowUp Hook
 * File: useFollowUp.js
 */
import useCrud from '@hooks/useCrud';
import {
  createFollowUp,
  deleteFollowUp,
  getFollowUp,
  listFollowUps,
  updateFollowUp,
} from '@features/follow-up';

const useFollowUp = () =>
  useCrud({
    list: listFollowUps,
    get: getFollowUp,
    create: createFollowUp,
    update: updateFollowUp,
    remove: deleteFollowUp,
  });

export default useFollowUp;
