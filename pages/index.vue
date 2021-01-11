<template>
  <v-row justify="center" align="center">
    <v-col cols="3">
      <country-list />
    </v-col>

    <v-col cols="9"> <covid-map /> </v-col>
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
