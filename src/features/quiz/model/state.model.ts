import { QuestionModel, ResponseModel } from "@/features/quiz/model/model";

export interface AskQuestionStateModel {
  optionSelected: number;
}

export interface SkillQuizStateModel {
  title: string;
  questions: QuestionModel[];
  currentIndexQuestion: number;
  responses: ResponseModel[];
  isFinished: boolean;
}