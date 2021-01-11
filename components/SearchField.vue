<template>
  <v-card flat dense floating>
    <!-- <v-card-text class="d-flex align-center"> -->
    <!-- <v-text-field></v-text-field> -->
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      hide-details
      filled
      solo
      placeholder="Search country ex. PH or Philippines"
      prepend-inner-icon="mdi-magnify"
      append-icon="mdi-crosshairs-gps"
      @click:append="getLocation"
      single-line
    ></v-autocomplete>
    <!-- </v-card-text> -->
  </v-card>
</template>

<script>
export default {
  props: {
    searchCountry: Function,
  },
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
    };
  },
  watch: {
    search(val) {
      this.searchCountry(val);
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    async showPosition(position) {
      if (!position) return;
      const geocoder = new google.maps.Geocoder();
      console.log(position);
      const { latitude, longitude } = position.coords;
      const latlng = { lat: latitude, lng: longitude };
      const self = this;

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            self.search = results[0].address_components[4].long_name;
            console.log(self.search);
            console.log(status);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      });
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(this.showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.countries.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
  computed: {
    countries() {
      return this.$store.getters["covid/getCountriesName"];
    },
  },
};
</script>