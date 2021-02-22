<template>
  <div class="home">
    <sc-page-title title="Lista de pruebas"></sc-page-title>
    <sc-card-quiz
      v-for="quiz in quizList"
      :key="quiz.id"
      :title="quiz.name"
      :body="quiz.description"
      @click="navigateToQuiz(quiz.id)"
    ></sc-card-quiz>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getQuizListData } from "../../quiz/api/quiz.api";
import SCCardQuiz from "../components/SCCardQuiz.vue";
import { QuizModel } from "../model/model";

export default defineComponent({
  name: "Home",
  components: { "sc-card-quiz": SCCardQuiz },
  data: (): { quizList: QuizModel[] } => {
    return { quizList: [] };
  },
  created() {
    this.quizList = getQuizListData();
  },
  methods: {
    navigateToQuiz(id: number) {
      this.$router.push({
        name: "AngularQuiz",
        params: { id },
      });
    },
  },
});
</script>
