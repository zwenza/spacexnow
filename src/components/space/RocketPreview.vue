<template>
  <div>
    <div v-for="core in rocket.first_stage.cores"
         :key="core.core_serial">
      <div id="coreInfoPopover"
               v-if="core.core_serial"
               :variant="core.reused ? 'primary' : 'info'">
        {{core.core_serial}}
      </div>

<!--
      <b-popover  v-if="coreDetails[core.core_serial] != null"
                  target="coreInfoPopover"
                  triggers="hover">
        <p>Previous missions</p>
        <b-badge v-for="mission in coreDetails[core.core_serial].missions" :key="mission" variant="primary">
          {{mission}}
        </b-badge>
      </b-popover> -->
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
