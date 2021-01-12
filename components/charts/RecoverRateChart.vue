<template>
  <v-card>
    <v-card-text class="d-flex align-center">
      <client-only>
        <apexchart
          type="donut"
          width="120"
          height="135"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </client-only>

      <p class="subtitle-1 font-weight-bold ml-2">
        <span> Recovery Rate </span> <br />
        <span>{{ format(series[0]) }}%</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import numeral from "numeraljs";
export default {
  props: {
    recovered: Number,
    cases: Number,
  },

  data() {
    return {
      //   series: [44, 55, 13, 33],
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        colors: ["#00E676", "#808080"],

        legend: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  },

  computed: {
    crr() {
      return (this.recovered / this.cases) * 100;
    },

    series() {
      return [this.crr, 100 - this.crr];
    },
  },

  methods: {
    format(number) {
      return numeral(number).format("0,0.00");
    },
  },
};
</script>

<style>
</style>