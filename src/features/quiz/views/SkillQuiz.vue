<template>
  <div>
    <sc-page-title :title="title"></sc-page-title>
    <div class="header">
      <span
        >Pregunta {{ currentIndexQuestion + 1 }} de {{ questions.length }}</span
      >
    </div>
  </div>
  <sc-ask-question
    :question="currentQuestion"
    :isFinishQuestion="currentIndexQuestion + 1 === questions.length"
    @addResponse="addResponse"
    @nextQuestion="nextQuestion()"
    @finish="finish()"
  ></sc-ask-question>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SCAskQuestionVue from "../components/SCAskQuestion.vue";
import { SkillQuizStateModel } from "../model/state.model";
import { QUESTIONS } from "./angular.quiz";
import { QuestionModel, QuizModel, ResponseModel } from "../model/model";
import { getQuizQuestions } from "../api/quiz.api";

export default defineComponent({
  components: {
    "sc-ask-question": SCAskQuestionVue,
  },
  data: (): SkillQuizStateModel => {
    return {
      title: "Skills Checkup",
      questions: [],
      currentIndexQuestion: 0,
      responses: [],
      isFinished: false,
    };
  },
  created() {
    getQuizQuestions(+this.$route.params.id).then((quiz) => {
      this.questions = quiz.questions as QuestionModel[];
      this.title = quiz.name;
    });
  },
  watch: {
    optionSelected(newValue, oldValue) {
      console.log(newValue);
    },
  },
  computed: {
    currentQuestion(): QuestionModel {
      return this.questions[this.currentIndexQuestion];
    },
  },
  methods: {
    nextQuestion() {
      this.currentIndexQuestion = this.currentIndexQuestion + 1;
    },
    addResponse(response: ResponseModel) {
      this.responses = this.responses.filter((res) => {
        return res.questionId !== this.currentQuestion.id;
      });
      this.responses = [...this.responses, response];
    },
    finish() {
      this.isFinished = true;
    },
  },
});
</script>