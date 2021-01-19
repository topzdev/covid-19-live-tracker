<template>
  <v-row class="covid-list" justify="center" align="center">
    <v-col cols="3">
      <country-list />
    </v-col>

    <v-col class="covid-map px-0 py-0" cols="9">
      <covid-map />

      <covid-global-stats class="covid-stats" />
    </v-col>
  </v-row>
</template>

<script>
import { types } from "@/store/types";
export default {
  async fetch() {
    await this.$store.dispatch("covid/" + types.actions.GET_GLOBAL_SUMMARY);
    await this.$store.dispatch("covid/" + types.actions.GET_ALL_COUNTRIES);
  },
};
</script>


<style lang="scss">
.covid-map {
  position: relative;
  height: calc(100vh - 30px);
  width: calc(100% - 30px);
}

.covid-stats {
  position: absolute;
  bottom: 0;
  left: 49%;
  transform: translateX(-50%);
  width: 50%;
}
</style>
