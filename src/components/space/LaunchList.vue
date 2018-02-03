<template>
    <div>
        <h2>Launches</h2>
        <p v-if="!launches">Loading...</p>
        <ul>
          <li v-for="launch in launches" v-bind:key="launch.name">{{launch.rocket.rocket_name}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
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
