<template>
  <v-container fluid>
    <v-row class="d-flex country-list">
      <v-col cols="12">
        <search-field :search-country="searchCountry" />
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-select
          label="Sort by"
          hide-details=""
          v-model="sort"
          :items="sortItem"
        ></v-select>
      </v-col>
      <v-col cols="12" class="country-list__scroll">
        <v-row class="country-list__row">
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
    sort: "Cases Highest",
    sortItem: [
      "Country Name",
      "Cases Highest",
      "Cases Lowest",
      "Recovery Highest",
      "Recovery Lowest",
      "Deaths Highest",
      "Deaths Lowest",
      "Deaths/Cases Ratio",
    ],
  }),

  methods: {
    searchCountry(search) {
      console.log(search);
      this.search = search;
    },

    sortByProp(result, prop, type) {
      return result.sort(function (a, b) {
        if (type === "high") return b[prop] - a[prop];
        return a[prop] - b[prop];
      });
    },

    sortyByRatio(result) {
      const calcCFR = (deaths, cases) => {
        return (deaths / cases) * 100;
      };

      return result.sort(function (a, b) {
        return calcCFR(b.deaths, a.cases) - calcCFR(a.deaths, a.cases);
      });
    },
  },

  computed: {
    countries() {
      if (this.search !== "")
        return this.$store.getters["covid/getListBySearch"](this.search);
      const result = JSON.parse(
        JSON.stringify(this.$store.state.covid.countries)
      );
      if (this.sort === "Country Name") return result;

      if (this.sort === "Cases Highest")
        return this.sortByProp(result, "cases", "high");
      if (this.sort === "Cases Lowest")
        return this.sortByProp(result, "cases", "low");
      if (this.sort === "Recovery Highest")
        return this.sortByProp(result, "recovered", "high");
      if (this.sort === "Recovery Lowest")
        return this.sortByProp(result, "recovered", "low");
      if (this.sort === "Deaths Highest")
        return this.sortByProp(result, "deaths", "high");
      if (this.sort === "Deaths Lowest")
        return this.sortByProp(result, "deaths", "low");
      if (this.sort === "Deaths/Cases Ratio") return this.sortyByRatio(result);
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
    height: 83%;
    overflow: auto;
  }

  &__row {
    padding-bottom: 30px;
  }
}
</style>