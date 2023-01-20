<template>
  <div class="main-continer"> 
    <h1>Weather</h1>
    <div>
      <input
        type="text"
        :value="searchQueary"
        @input="(e) => (searchQueary = e.target.value)"
      />
      <button @click="getDataByCurrentLocation">Search</button>
    </div>
  </div>
</template>

<script>
import agent from "superagent";
export default {
  name: "DailyWeather",
  inject: ["API_URL", "API_KEY"],
  data() {
    return { weather: undefined, searchQueary: "" };
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      this.successCallback,
      this.errorCallback
    );
  },
  methods: {
    successCallback(position) {
      console.log(position);
      this.getDataByCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      );
    },
    errorCallback(error) {
      console.log(error);
    },
    getDataByCurrentLocation(latitude, longitude) {
      const request = this.searchQueary
        ? { q: this.searchQueary, appid: this.API_KEY }
        : {
            lat: latitude,
            lon: longitude,
            appid: this.API_KEY,
          };
      agent
        .get(this.API_URL)
        .query(request)
        .then((res) => (this.weather = res))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
