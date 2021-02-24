
<template>
  <canvas id="doughnut" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Chart from "chart.js";

export default defineComponent({
  name: "sc-doughnut-chart",
  props: {
    labels: {
      type: Object as PropType<Array<string>>,
      default: () => {
        return [];
      },
    },
    colors: {
      type: Object as PropType<Array<string>>,
      default: () => {
        return [];
      },
    },
    data: {
      type: Object as PropType<Array<number>>,
      default: () => {
        return [];
      },
    },
    options: {
      type: Object || undefined,
      default: () => {
        return Chart.defaults.doughnut;
      },
    },
  },
  mounted() {
    this.createChart({
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors,
        },
      ],
      labels: this.labels,
    });
  },
  methods: {
    createChart(chartData: any) {
      const canvas = document.getElementById("doughnut") as HTMLCanvasElement;
      const options = {
        type: "doughnut",
        data: chartData,
        options: this.options,
      };
      new Chart(canvas, options);
    },
  },
});
</script>
