<template>
    <div>
        <h2>Agencies</h2>
        <p v-if="!agencies">Loading...</p>
        <ul>
          <li v-for="agency in agencies" v-bind:key="agency.name">{{agency.name}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      agencies: undefined
    };
  },
  created() {
    axios.get(`https://launchlibrary.net/1.3/agency`).then(response => {
      this.agencies = response.data.agencies;
    });
  }
};
</script>
