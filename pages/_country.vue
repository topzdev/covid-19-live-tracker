<template>
  <v-container v-if="summary">
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col class="d-flex align-center" cols="12">
            <v-btn color="primary" class="mr-2" to="/">Back</v-btn>
            <h1 class="d-flex flex-row">
              <v-img
                max-height="60px"
                max-width="70px"
                class="mr-2"
                :src="summary.countryInfo.flag"
              ></v-img>
              {{ summary.country }} Overview
            </h1>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-text>
                <covid-overall-stats :stats="summary" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <fatality-rate-chart
              :deaths="summary.deaths"
              :cases="summary.cases"
            />
          </v-col>
          <v-col cols="3">
            <recover-rate-chart
              :recovered="summary.recovered"
              :cases="summary.cases"
            />
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="8">
                <v-row>
                  <v-col cols="6">
                    <critical-cases-card
                      :cases="summary.cases"
                      :criticalPerOneMillion="summary.criticalPerOneMillion"
                      :critical="summary.critical"
                    />
                  </v-col>
                  <v-col cols="6">
                    <test-cases-card
                      :tests="summary.tests"
                      :testsPerOneMillion="summary.testsPerOneMillion"
                      :population="summary.population"
                    />
                  </v-col>
                  <v-col cols="12">
                    <country-history-card
                      :iso2="summary.countryInfo.iso2"
                      :country="summary.countryInfo.iso2"
                    />
                  </v-col>
                  <v-col cols="12">
                    <covid-news-list
                      :country="summary.country"
                      :iso2="summary.countryInfo.iso2"
                      :iso3="summary.countryInfo.iso3"
                    />
                  </v-col>
                </v-row>
              </v-col>

              <!-- <v-col cols="4">
                <covid-twitter />
              </v-col> -->
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { types } from "@/store/types";
export default {
  async fetch() {
    await this.$store.dispatch("covid/" + types.actions.CLEAR_COUNTRY_SUMMARY);
    const country = this.$route.params.country;
    console.log(country);

    await this.$store.dispatch(
      "covid/" + types.actions.GET_COUNTRY_SUMMARY,
      country
    );
  },
  computed: {
    summary() {
      return this.$store.state.covid.country;
    },
    country() {
      return this.$route.params.country;
    }
  }
};
</script>

<style></style>
