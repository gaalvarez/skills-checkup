<template>
  <div class="rating">
    <span v-for="index in [...Array(6).keys()].slice(1).reverse()" :key="index">
      <input
        v-model="rating"
        type="radio"
        :id="name + index"
        name="rating"
        :value="index"
      />
      <label :for="name + index">
        <span class="fa fa-star" :class="isRatingChecked(index)"></span>
      </label>
    </span>
    {{ rating }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["name"],
  data() {
    return {
      rating: 4,
    };
  },
  methods: {
    isRatingChecked(index: number) {
      return index <= this.rating ? "checked" : "";
    },
  },
});
</script>