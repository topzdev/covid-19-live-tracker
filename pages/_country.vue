<template>
  <v-container fluid v-if="summary">
    <v-row>
      <v-col cols="9">
        <v-col cols="12">
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
              <v-row>
                <v-col cols="4 text-center">
                  <v-icon size="30" class="orange--text"
                    >mdi-emoticon-sick-outline</v-icon
                  >
                  <h1 class="flex my-2 orange--text">
                    {{ format(summary.cases) }}
                  </h1>
                  <div class="body-1 font-weight-bold">Cases</div>
                  <div class="subtitle-2">
                    +{{ format(summary.todayCases) }} new cases
                  </div>
                </v-col>
                <v-col cols="4 text-center">
                  <v-icon size="30" class="success--text"
                    >mdi-plus-thick</v-icon
                  >
                  <h1 class="flex my-2 success--text">
                    {{ format(summary.recovered) }}
                  </h1>
                  <div class="body-1 font-weight-bold">Recovered</div>
                  <div class="subtitle-2">
                    +{{ format(summary.todayRecovered) }} new recover
                  </div>
                </v-col>
                <v-col cols="4 text-center">
                  <v-icon size="30" class="red--text"
                    >mdi-skull-crossbones-outline</v-icon
                  >
                  <h1 class="flex my-2 red--text">
                    {{ format(summary.deaths) }}
                  </h1>
                  <div class="body-1 font-weight-bold">Deaths</div>
                  <div class="subtitle-2">
                    +{{ format(summary.todayDeaths) }} new deaths
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>

      <v-col cols="3">
        <h2>Tweets from WHO</h2>
        <a
          class="twitter-timeline"
          data-lang="en"
          data-theme="light"
          height="100vh"
          href="https://twitter.com/WHO?ref_src=twsrc%5Etfw"
        ></a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import numeral from "numeraljs";
import { types } from "@/store/types";
export default {
  async fetch() {
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
    },
  },
  methods: {
    format(number) {
      return numeral(number).format("0,0");
    },
  },
};
</script>

<style>
</style>