<template>
    <div>
        <h2>Upcoming Launches</h2>
        <p v-if="!launches">Loading...</p>
        <div class="sp-launch-container">
            <sp-launch v-for="launch in launches" :key="launch.name" :launch="launch"></sp-launch>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Launch from '@/components/space/Launch';

export default {
  components: {
    'sp-launch': Launch
  },
  data() {
    return {
      launches: undefined
    };
  },
  created() {
    axios
      .get(`https://api.spacexdata.com/v2/launches/upcoming`)
      .then(response => {
        this.launches = response.data;
      });
  }
};
</script>

<style>
.sp-launch-container {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  flex-wrap: wrap;
}
</style>
