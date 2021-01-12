<template>
  <v-row v-if="news">
    <v-col cols="12">
      <h2>News about COVID in {{ country }} Today</h2>
    </v-col>
    <v-col v-for="(item, idx) in list" :key="idx" cols="12">
      <news-card :news="item" />
    </v-col>

    <v-col cols="12">
      <div class="text-center">
        <v-pagination v-model="page" :length="length"></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { types } from "@/store/types";
export default {
  props: {
    country: String,
    iso3: String,
    iso2: String,
  },

  data() {
    return {
      page: 1,
      limit: 5,
    };
  },

  async fetch() {
    await this.$store.dispatch(
      "news/" + types.actions.GET_NEWS_COUNTRY,
      this.iso2
    );
  },

  computed: {
    length() {
      return Math.ceil(this.news.count / this.limit);
    },
    news() {
      return this.$store.state.news.country;
    },

    list() {
      return this.news.items.slice(
        (this.page - 1) * this.limit,
        this.page * this.limit
      );
    },
  },
};
</script>

<style>
</style>