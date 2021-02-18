<template>
  <div class="home">
    <sc-page-title title="Skill Quiz"></sc-page-title>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SCPageTitleVue from "@/components/SCPageTitle.vue";

export default defineComponent({
  name: "Home",
  components: {
    "sc-page-title": SCPageTitleVue,
  },
});
</script>
