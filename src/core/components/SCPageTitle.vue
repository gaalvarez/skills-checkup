<template>
  <div class="title-wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
.title-wrapper
  padding: 30px
  text-align: center
</style>