<template>
  <v-card outlined :to="news.url">
    <v-list-item three-line>
      <v-list-item-avatar tile size="120" color="grey">
        <v-img :src="news.urlToImage" :alt="news.title"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline mb-1">{{ news.source.name }}</div>
        <v-list-item-title class="headline mb-1">
          {{ news.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-1 mb-3">{{
          dateFormat(news.publishedAt)
        }}</v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle-2">{{
          news.description
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    news: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    dateFormat(date) {
      return dayjs(date).format("MMMM DD, YYYY hh:mma");
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>>

<style>
</style>