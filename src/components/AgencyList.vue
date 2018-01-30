<template>
    <div>
        <h1>Agencies</h1>
        <p v-if="!agencies">Loading...</p>
        <ul>
          <li v-for="agency in agencies" v-bind:key="agency.name">{{agency.name}}</li>
        </ul>
        <b-alert show>Default Alert</b-alert>
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
