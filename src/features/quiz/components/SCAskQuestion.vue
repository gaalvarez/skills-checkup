<template>
  <div v-if="question">
    <div class="question-wrapper">
      <div class="question">
        <span>{{ question.question }}</span>
      </div>
      <div class="options">
        <ul>
          <li
            v-for="(option, index) in question.options"
            v-bind:class="{ selected: optionSelected === index }"
            v-on:click="addResponse(index)"
            :key="index"
          >
            {{ option }}
          </li>
        </ul>
      </div>
      <button
        v-on:click="nextQuestion"
        v-if="!isFinishQuestion"
        v-bind:disabled="!isOptionSelected"
      >
        Siguiente
      </button>
      <button
        v-on:click="finish()"
        v-bind:disabled="!isOptionSelected"
        v-if="isFinishQuestion"
      >
        Finalizar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AskQuestionStateModel } from "../model/state.model";
import { QuestionModel } from "../model/model";

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<QuestionModel>,
      required: true,
    },
    isFinishQuestion: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["nextQuestion", "addResponse", "finish"],
  data: (): AskQuestionStateModel => {
    return {
      optionSelected: -1,
    };
  },
  watch: {
    optionSelected(newValue, oldValue) {
      console.log(newValue);
    },
  },
  computed: {
    isOptionSelected(): boolean {
      return this.optionSelected > -1;
    },
  },
  methods: {
    nextQuestion() {
      this.optionSelected = -1;
      this.$emit("nextQuestion");
    },
    addResponse(indexOption: number) {
      this.optionSelected = indexOption;
      const response = {
        questionId: this.question.id,
        question: this.question.question,
        response: indexOption,
        correct: this.question.response,
      };
      this.$emit("addResponse", response);
    },
    finish() {
      this.$emit("finish");
    },
  },
});
</script>

<style lang="sass" scoped>
.selected
  background-color: lightblue

.options
  ul
    text-align: left
    list-style-type: none
    ul > li
      margin: 5px
      padding: 5px
.question
  margin: 10px
  font-size: 24px
  font-weight: bold
</style>