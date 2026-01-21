/**
 * Pricing Rule Use Cases
 * File: pricing-rule.usecase.js
 */
import { endpoints } from '@config/endpoints';
import { handleError } from '@errors';
import { queueRequestIfOffline } from '@offline/request';
import { pricingRuleApi } from './pricing-rule.api';
import { normalizePricingRule, normalizePricingRuleList } from './pricing-rule.model';
import {
  parsePricingRuleId,
  parsePricingRuleListParams,
  parsePricingRulePayload,
} from './pricing-rule.rules';

const execute = async (work) => {
  try {
    return await work();
  } catch (error) {
    throw handleError(error);
  }
};

const listPricingRules = async (params = {}) =>
  execute(async () => {
    const parsed = parsePricingRuleListParams(params);
    const response = await pricingRuleApi.list(parsed);
    return normalizePricingRuleList(response.data);
  });

const getPricingRule = async (id) =>
  execute(async () => {
    const parsedId = parsePricingRuleId(id);
    const response = await pricingRuleApi.get(parsedId);
    return normalizePricingRule(response.data);
  });

const createPricingRule = async (payload) =>
  execute(async () => {
    const parsed = parsePricingRulePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PRICING_RULES.CREATE,
      method: 'POST',
      body: parsed,
    });
    if (queued) {
      return normalizePricingRule(parsed);
    }
    const response = await pricingRuleApi.create(parsed);
    return normalizePricingRule(response.data);
  });

const updatePricingRule = async (id, payload) =>
  execute(async () => {
    const parsedId = parsePricingRuleId(id);
    const parsed = parsePricingRulePayload(payload);
    const queued = await queueRequestIfOffline({
      url: endpoints.PRICING_RULES.UPDATE(parsedId),
      method: 'PUT',
      body: parsed,
    });
    if (queued) {
      return normalizePricingRule({ id: parsedId, ...parsed });
    }
    const response = await pricingRuleApi.update(parsedId, parsed);
    return normalizePricingRule(response.data);
  });

const deletePricingRule = async (id) =>
  execute(async () => {
    const parsedId = parsePricingRuleId(id);
    const queued = await queueRequestIfOffline({
      url: endpoints.PRICING_RULES.DELETE(parsedId),
      method: 'DELETE',
    });
    if (queued) {
      return normalizePricingRule({ id: parsedId });
    }
    const response = await pricingRuleApi.remove(parsedId);
    return normalizePricingRule(response.data);
  });

export {
  listPricingRules,
  getPricingRule,
  createPricingRule,
  updatePricingRule,
  deletePricingRule,
};
