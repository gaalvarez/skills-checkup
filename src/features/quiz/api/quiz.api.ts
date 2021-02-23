import { getRequest } from "@/common/request.api";
import { QuizModel } from "../model/model";

const getQuizListData = (): Promise<QuizModel[]> => {
  return getRequest("http://localhost:3000/skill/quizzes");
};

const getQuizQuestions = (id: number): Promise<QuizModel> => {
  return getRequest(`http://localhost:3000/skill/quizzes/${id}`);
};

export { getQuizListData, getQuizQuestions };
