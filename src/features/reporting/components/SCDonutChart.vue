<template>
  <div id="donut" style="width: 900px; height: 500px"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

declare let google: any;

export default defineComponent({
  name: "sc-donut-chart",
  props: {
    header: {
      type: Object as PropType<Array<string>>,
      default: () => {
        return [];
      },
    },
    data: {
      type: Object as PropType<Array<Array<number | string>>>,
      default: () => {
        return [];
      },
    },
    options: {
      type: Object || undefined,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    const drawChart = () => {
      this.createChart({
        datasets: google.visualization.arrayToDataTable([
          this.header,
          ...this.data,
        ]),
        options: this.options,
      });
    };
    google.charts.load("current", { packages: ["corechart"] });
    google.setOnLoadCallback(drawChart);
  },
  methods: {
    createChart(chartData: any) {
      const chart = new google.visualization.PieChart(
        document.getElementById("donut")
      );
      chart.draw(chartData.datasets, chartData.options);
    },
  },
});
</script>