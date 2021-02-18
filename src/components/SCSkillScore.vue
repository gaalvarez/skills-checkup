<template>
  <div>
    <span>Tu calificación es: {{ score }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ResponseModel } from "@/model/model";
export default defineComponent({
  name: "SCSkillScore",
  props: {
    responses: {
      type: Object as PropType<ResponseModel[]>,
      required: true,
    },
  },
  computed: {
    score(): number {
      return this.responses
        .map((response): number =>
          response.correct === response.response ? 1 : 0
        )
        .reduce((a, b) => a + b, 0);
    },
  },
});
</script>

<style lang="sass" scoped>
.score
    margin: 10px
    font-size: 20px
    font-weight: bold
</style>
