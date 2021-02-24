<template>
  <div class="chart-wrapper">
    <sc-doughnut-chart
      :data="data"
      :labels="labels"
      :colors="['red', 'green']"
    />
    <!-- <sc-donut-chart
      :data="[
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]"
      :header="['Task', 'Hours per Day']"
      :options="{
        title: 'My Daily Activities',
        pieHole: 0.4,
      }"
    /> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import SCDonutChart from "../components/SCDonutChart.vue";
import SCDoughnutChart from "../components/SCDoughnutChart.vue";
import { useReportingStore } from "../store/reporting.store";
export default defineComponent({
  setup() {
    const store = useReportingStore();
    const data = computed(() => {
      return store.state.data;
    });

    const labels = computed(() => {
      return store.state.labels;
    });
    onMounted(() => {
      store.dispatch("requestReport");
    });
    return {
      data,
      labels,
    };
  },
  components: {
    "sc-doughnut-chart": SCDoughnutChart,
    // "sc-donut-chart": SCDonutChart,
  },
});
</script>