import { getRequest } from "@/common/request.api";
import { QuizModel } from "../model/model";

const getQuizListData = (): Promise<QuizModel[]> => {
  return getRequest("skill/quizzes");
};

const getQuizQuestions = (id: number): Promise<QuizModel> => {
  return getRequest(`skill/quizzes/${id}`);
};

export { getQuizListData, getQuizQuestions };
