<template>
  <sc-result-quiz :responses="responses"></sc-result-quiz>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store/quiz.store";
import SCResultQuiz from "../components/SCResultQuiz.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const responses = computed(() => {
      return store.state.responses;
    });
    return {
      responses,
    };
  },
  components: { "sc-result-quiz": SCResultQuiz },
});
</script>