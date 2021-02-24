import { createStore, Store } from "vuex";
import { ResponseModel } from "../model/model";

export interface QuizState {
  responses: ResponseModel[];
}

export const store = createStore<QuizState>({
  state: { responses: [] },
  mutations: {
    addResponse(state: QuizState, response: ResponseModel) {
      const filterResponses = state.responses.filter((res) => {
        return res.questionId !== response.questionId;
      });
      state.responses = [...filterResponses, response];
    },
  },
  actions: {},
});

export function useStore(): Store<QuizState> {
  return store;
}
