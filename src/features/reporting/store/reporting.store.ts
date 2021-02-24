import { createStore, Store } from "vuex";
import { getRequest } from "@/common/request.api";
import { ResponseReportModel } from "../model/reporting.model";

export interface QuizState {
  data: number[];
  labels: string[];
}

export const store = createStore<QuizState>({
  state: { data: [], labels: [] },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLabels(state, labels) {
      state.labels = labels;
    },
  },
  actions: {
    requestReport({ commit }) {
      getRequest("reports/responses").then((data: ResponseReportModel) => {
        const dataValues = Object.values(data);
        commit("setData", dataValues);
        const labels = Object.keys(data);
        commit("setLabels", labels);
      });
    },
  },
});

export function useReportingStore(): Store<QuizState> {
  return store;
}
