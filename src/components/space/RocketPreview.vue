<template>
  <div>
    <div v-for="core in rocket.first_stage.cores"
         v-bind:key="core.core_serial">
      Cores:
      <b-badge id="coreInfoPopover"
               :variant="core.reused ? 'primary' : 'info'">
        {{core.core_serial}}
      </b-badge>

      <b-popover  v-if="coreDetails[core.core_serial] != null"
                  target="coreInfoPopover"
                  triggers="hover">
        <p>Previous missions</p>
        <b-badge v-for="mission in coreDetails[core.core_serial].missions" v-bind:key="mission" variant="primary">
          {{mission}}
        </b-badge>
      </b-popover>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default {
  name: 'sp-rocket-preview',
  props: ['rocket'],
  data: function() {
    return {
      coreDetails: {}
    };
  },
  mounted: function() {
    this.rocket.first_stage.cores.forEach(core => {
      if (core.reused) {
        axios
          .get(`https://api.spacexdata.com/v2/parts/cores/${core.core_serial}`)
          .then(booster => {
            Vue.set(this.coreDetails, booster.data.core_serial, booster.data);
          });
      }
    });
  }
};
</script>
