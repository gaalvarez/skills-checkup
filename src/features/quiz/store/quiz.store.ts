import { createStore } from "vuex";
import { ResponseModel } from "../model/model";

export interface QuizState {
  responses: ResponseModel[];
}

export default createStore<QuizState>({
  state: { responses: [] },
  mutations: {
    addResponse(state: QuizState, response: ResponseModel) {
      state.responses = [...state.responses, response];
    },
  },
  actions: {},
});
