<template>
  <GmapMap
    :options="options"
    :center="center"
    :zoom="4"
    style="width: 100%; height: 100vh"
  >
    <GmapCircle
      :key="index"
      v-for="(m, index) in countries"
      :center="{ lat: m.lat, lng: m.long }"
      :clickable="false"
      :draggable="false"
      :radius="m.cases / 10"
      :options="{
        fillOpacity: 0.2,
        fillColor: 'red',
        strokeWeight: 1,
      }"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
      },
    };
  },
  computed: {
    countries() {
      return this.$store.getters["covid/getCountryInfo"];
    },
    center() {
      return this.$store.state.map.center;
    },
  },
};
</script>

<style>
</style>