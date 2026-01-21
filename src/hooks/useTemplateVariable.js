/**
 * useTemplateVariable Hook
 * File: useTemplateVariable.js
 */
import useCrud from '@hooks/useCrud';
import {
  createTemplateVariable,
  deleteTemplateVariable,
  getTemplateVariable,
  listTemplateVariables,
  updateTemplateVariable,
} from '@features/template-variable';

const useTemplateVariable = () =>
  useCrud({
    list: listTemplateVariables,
    get: getTemplateVariable,
    create: createTemplateVariable,
    update: updateTemplateVariable,
    remove: deleteTemplateVariable,
  });

export default useTemplateVariable;
