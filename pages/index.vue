<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6"> </v-col>
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
