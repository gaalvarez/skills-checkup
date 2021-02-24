<template>
  <div>
    <span>Tu calificación es: {{ score }}</span>
    <h1>Respuestas</h1>
    <div class="responses">
      <ul>
        <li v-for="res in responses" :key="res.questionId">
          <span v-check="res">{{ res.question }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { scCheckDirectiveOption } from "../directives/check.response";

export default defineComponent({
  directives: {
    check: scCheckDirectiveOption,
  },
  props: ["responses"],
  data() {
    return {};
  },
  computed: {
    score(): any {
      return this.responses
        .map((response: any) =>
          response.correct === response.response ? 1 : 0
        )
        .reduce(function (a: number, b: number) {
          return a + b;
        }, 0);
    },
  },
  methods: {},
});
</script>