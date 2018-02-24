<template>
  <div>
    <div v-for="core in rocket.first_stage.cores"
         :key="core.core_serial">
      <md-chip v-if="core.core_serial"
               :class="{ 'md-primary': core.reused }"
               :variant="core.reused ? 'primary' : 'info'">
        <b>🚀 {{core.core_serial}}</b>
        <md-tooltip md-direction="right"
                    v-if="coreDetails[core.core_serial] != null">
          <span v-for="(mission, index) in coreDetails[core.core_serial].missions" :key="mission"><span v-if="index > 0"> - </span>{{mission}}</span>
        </md-tooltip>
      </md-chip>
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
