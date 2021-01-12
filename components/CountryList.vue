<template>
  <v-container fluid>
    <v-row class="d-flex country-list">
      <v-col cols="12">
        <search-field :search-country="searchCountry" />
      </v-col>
      <v-col cols="12">
        <v-select
          label="Sort by"
          hide-details=""
          v-model="sort"
          :items="sortItem"
        ></v-select>
      </v-col>
      <v-col cols="12" class="country-list__scroll">
        <v-row>
          <v-col v-for="item in countries" :key="item.country" cols="12">
            <country-card :info="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    sort: "Country Name",
    sortItem: ["Country Name", "Cases", "Recovery", "Deaths"],
  }),

  methods: {
    searchCountry(search) {
      console.log(search);
      this.search = search;
    },
  },

  computed: {
    countries() {
      if (this.search !== "")
        return this.$store.getters["covid/getListBySearch"](this.search);

      return this.$store.state.covid.countries;
    },
  },
};
</script>

<style lang="scss">
.country-list {
  display: flex;
  height: 100vh;
  min-height: 100vh;
  &__scroll {
    height: 90%;
    overflow: auto;
  }
}
</style>