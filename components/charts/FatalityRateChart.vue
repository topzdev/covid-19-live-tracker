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

      <p class="subtitle-1 font-weight-bold ml-2 red--text">
        <span> Fatality Rate </span> <br />
        <span class="accent--1">{{ format(series[0]) }}%</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import numeral from "numeraljs";
export default {
  props: {
    deaths: Number,
    cases: Number,
  },

  data() {
    return {
      //   series: [44, 55, 13, 33],
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        colors: ["#F44336", "#808080"],

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
    cfr() {
      return (this.deaths / this.cases) * 100;
    },

    series() {
      return [this.cfr, 100 - this.cfr];
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