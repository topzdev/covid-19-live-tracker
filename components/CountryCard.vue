<template>
  <v-card :loading="loading" @click="setCenter()" v-click-outside="hideMore">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title class="d-flex px-3 py-2"
      ><v-img
        max-height="30px"
        max-width="30px"
        class="mr-1"
        :src="info.countryInfo.flag"
      ></v-img>
      {{ info.country }}</v-card-title
    >
    <v-card-text class="d-flex flex-row justify-space-between px-3 py-1">
      <p>
        <span class="overline">Cases </span>
        <br />
        <span>
          <b>{{ numberFormat(info.cases) }}</b></span
        >
      </p>
      <p>
        <span class="overline">Recoveries </span>
        <br />
        <span>
          <b>{{ numberFormat(info.recovered) }}</b></span
        >
      </p>
      <p>
        <span class="overline">Deaths </span>
        <br />
        <span>
          <b>{{ numberFormat(info.deaths) }}</b></span
        >
      </p>
    </v-card-text>

    <v-card-actions v-if="more">
      <v-btn color="primary">View {{ info.country }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { types } from "@/store/types";
import numeral from "numeraljs";
export default {
  props: {
    info: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
    more: false,
  }),

  methods: {
    numberFormat(number) {
      return numeral(number).format("0,0");
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    hideMore() {
      this.more = false;
    },

    setCenter() {
      this.more = !this.more;
      const { long, lat } = this.info.countryInfo;
      this.$store.dispatch("map/" + types.actions.SET_MAP_CENTER, {
        lng: long,
        lat,
      });
    },
  },
};
</script>