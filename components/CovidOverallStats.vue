<template>
  <v-row>
    <v-col cols="4 text-center">
      <v-icon size="30" class="orange--text">mdi-emoticon-sick-outline</v-icon>
      <h1 class="flex my-2 orange--text">
        {{ format(stats.cases) }}
      </h1>
      <div class="body-1 font-weight-bold">Cases</div>
      <div class="subtitle-2">+{{ format(stats.todayCases) }} new cases</div>
    </v-col>
    <v-col cols="4 text-center">
      <v-icon size="30" class="success--text">mdi-plus-thick</v-icon>
      <h1 class="flex my-2 success--text">
        {{ format(stats.recovered) }}
      </h1>
      <div class="body-1 font-weight-bold">Recovered</div>
      <div class="subtitle-2">
        +{{ format(stats.todayRecovered) }} new recover
      </div>
    </v-col>
    <v-col cols="4 text-center">
      <v-icon size="30" class="red--text">mdi-skull-crossbones-outline</v-icon>
      <h1 class="flex my-2 red--text">
        {{ format(stats.deaths) }}
      </h1>
      <div class="body-1 font-weight-bold">Deaths</div>
      <div class="subtitle-2">+{{ format(stats.todayDeaths) }} new deaths</div>
    </v-col>
  </v-row>
</template>

<script>
import numeral from "numeraljs";
export default {
  props: {
    stats: Object,
  },
  methods: {
    format(number) {
      return numeral(number).format("0,0");
    },
  },
};
</script>

<style>
</style>