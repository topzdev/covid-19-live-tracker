<template>
  <v-card v-if="history">
    <v-card-title class="d-flex">
      <v-row>
        <v-col cols="auto"> Last 30 Days Covid History in {{ country }} </v-col>
        <v-spacer />
        <v-col cols="2">
          <v-select
            label="Select Chart"
            hide-details=""
            v-model="selected"
            :items="charts"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <client-only>
        <apexchart
          :type="selected.toLowerCase()"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </client-only>
    </v-card-text>
  </v-card>
</template>

<script>
import { types } from "@/store/types";
export default {
  props: {
    country: String,
    iso2: String,
  },
  data() {
    return {
      selected: "Bar",
      charts: ["Bar", "Area", "Line"],
    };
  },
  async fetch() {
    const country = this.$route.params.country;
    console.log(country);

    await this.$store.dispatch("covid/" + types.actions.GET_COUNTRY_HISTORY, {
      country: this.iso2,
    });
  },

  computed: {
    chartOptions() {
      const XAxis = Object.keys(this.history.cases);
      return {
        chart: {
          type: "line",
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        stroke: {
          width: 1,
          curve: "straight",
          colors: ["#00E676", "#FF1744", "#2196F3"],
        },
        colors: ["#00E676", "#FF1744", "#2196F3"],
        // title: {
        //   text: "Fiction Books Sales",
        // },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        yaxis: { show: false },
        xaxis: {
          categories: XAxis,
          labels: {
            formatter: function (val) {
              return val;
            },
          },
        },

        dataLabels: {
          enabled: false,
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          offsetX: 40,
        },
      };
    },
    history() {
      return this.$store.state.covid.countryHistory;
    },

    series() {
      const cases = Object.values(this.history.cases);
      const deaths = Object.values(this.history.deaths);
      const recovered = Object.values(this.history.recovered);
      return [
        {
          name: "Cases",
          data: cases,
        },
        {
          name: "Deaths",
          data: deaths,
        },
        {
          name: "Recovered",
          data: recovered,
        },
      ];
    },
  },
};
</script>

<style>
</style>