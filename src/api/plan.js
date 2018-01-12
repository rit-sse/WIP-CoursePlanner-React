import { Headers } from './base';
import { serialize, deserialize } from 'serializr';
import { PlanModel } from '../stores/models/PlanModel';

export const PlanApi = {
  savePlan: (plan) => {
    return fetch('/api/plan/save', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify(plan),
    })
      .then((response) => response.json())
      .then((data) => {
        return deserialize(PlanModel, data, () => {});
      });
  },

  loadPlan: (id) => {
    fetch('/api/plan/load?planId='+id, {
      method: 'GET',
      headers: Headers(),
    })
      .then((response) => response.json())
      .then((data) => {
        return deserialize(PlanModel, data, () => {});
      });
  },
};
