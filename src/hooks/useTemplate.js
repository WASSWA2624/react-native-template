/**
 * useTemplate Hook
 * File: useTemplate.js
 */
import useCrud from '@hooks/useCrud';
import {
  createTemplate,
  deleteTemplate,
  getTemplate,
  listTemplates,
  updateTemplate,
} from '@features/template';

const useTemplate = () =>
  useCrud({
    list: listTemplates,
    get: getTemplate,
    create: createTemplate,
    update: updateTemplate,
    remove: deleteTemplate,
  });

export default useTemplate;
