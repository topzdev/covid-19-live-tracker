<template>
  <v-card v-if="global" elevation="10">
    <v-card-title> Global Covid Stats </v-card-title>
    <v-card-text>
      <covid-overall-stats :stats="global" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    global() {
      return this.$store.state.covid.global;
    },
  },
};
</script>

<style>
</style>