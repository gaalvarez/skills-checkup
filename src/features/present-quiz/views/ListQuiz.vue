<template>
  <div class="home">
    <sc-page-title title="Skill Quiz"></sc-page-title>
    <sc-card-quiz
      @click="navigateToQuiz(quiz.id)"
      v-for="quiz in quizList"
      :key="quiz.id"
      :title="quiz.name"
      :body="quiz.description"
    ></sc-card-quiz>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getQuizListData } from "../api/quiz.api";
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
