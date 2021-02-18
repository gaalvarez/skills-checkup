<template>
  <div>
    <sc-page-title title="Angular Quiz"></sc-page-title>
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
import SCAskQuestionVue from "@/components/SCAskQuestion.vue";
import SCPageTitleVue from "../components/SCPageTitle.vue";
import { SkillQuizStateModel } from "../model/state.model";
import { QUESTIONS } from "@/views/angular.quiz";
import { QuestionModel, ResponseModel } from "../model/model";

export default defineComponent({
  components: {
    "sc-ask-question": SCAskQuestionVue,
    "sc-page-title": SCPageTitleVue,
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
    this.questions = QUESTIONS;
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