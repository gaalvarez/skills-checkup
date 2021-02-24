<template>
  <sc-result-quiz :responses="responses"></sc-result-quiz>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SCResultQuiz from "../components/SCResultQuiz.vue";

export default defineComponent({
  computed: {
    responses() {
      return [];
    },
  },
  components: { "sc-result-quiz": SCResultQuiz },
});
</script>