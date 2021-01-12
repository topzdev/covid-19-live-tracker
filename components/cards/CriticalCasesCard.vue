<template>
  <v-card>
    <v-card-title> Critical Cases </v-card-title>
    <v-card-text class="py-0">
      <h2 class="red--text">
        {{ format(critical) }}
        <span class="subtitle-1">
          <b class="red--text">({{ percentage }}</b> of total Cases)</span
        >
      </h2>
    </v-card-text>
    <v-card-subtitle>
      {{ format(criticalPerOneMillion) }} Critical Per million
      population</v-card-subtitle
    >
  </v-card>
</template>

<script>
import numeral from "numeraljs";
export default {
  props: {
    cases: Number,
    critical: Number,
    criticalPerOneMillion: Number,
  },

  computed: {
    percentage() {
      return numeral((this.critical / this.cases) * 100).format("0,0.00") + "%";
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