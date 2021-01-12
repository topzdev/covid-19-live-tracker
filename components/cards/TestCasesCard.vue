<template>
  <v-card>
    <v-card-title> Tested Population </v-card-title>
    <v-card-text class="py-0">
      <h2 class="primary--text">
        {{ format(tests) }}
        <span class="subtitle-1">
          <b class="primary--text">({{ percentage }}</b> of total Cases)</span
        >
      </h2>
    </v-card-text>
    <v-card-subtitle>
      {{ format(testsPerOneMillion) }} Tested Per million
      population</v-card-subtitle
    >
  </v-card>
</template>

<script>
import numeral from "numeraljs";
export default {
  props: {
    population: Number,
    tests: Number,
    testsPerOneMillion: Number,
  },

  computed: {
    percentage() {
      return numeral((this.tests / this.population) * 100).format("0,0.00");
    },
  },
  methods: {
    format(value) {
      return numeral(value).format("0,0");
    },
  },
};
</script>

<style>
</style>