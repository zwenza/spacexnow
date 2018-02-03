<template>
    <div>
        <h2>Launches</h2>
        <p v-if="!launches">Loading...</p>
        <ul>
          <li v-for="launch in launches" v-bind:key="launch.name">{{launch.name}}</li>
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
    axios.get(`https://launchlibrary.net/1.3/launch`).then(response => {
      this.launches = response.data.launches;
    });
  }
};
</script>
