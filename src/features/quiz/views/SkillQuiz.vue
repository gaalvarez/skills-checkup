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
import { computed, defineComponent } from "vue";
import SCAskQuestionVue from "../components/SCAskQuestion.vue";
import { SkillQuizStateModel } from "../model/state.model";
import { QuestionModel, ResponseModel } from "../model/model";
import { getQuizQuestions } from "../api/quiz.api";
import { useStore } from "../store/quiz.store";

export default defineComponent({
  components: {
    "sc-ask-question": SCAskQuestionVue,
  },
  setup() {
    const store = useStore();
    const addResponse = (response: ResponseModel) => {
      return store.commit("addResponse", response);
    };
    return {
      addResponse,
    };
  },
  data: (): SkillQuizStateModel => {
    return {
      title: "Skills Checkup",
      questions: [],
      currentIndexQuestion: 0,
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
    finish() {
      this.$router.push({ name: "QuizResult" });
    },
  },
});
</script>