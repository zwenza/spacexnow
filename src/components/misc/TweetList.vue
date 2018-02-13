<template>
  <div  class="md-layout" style="height: 100%">
    <div class="md-layout-item">
      <Timeline :id="'SpaceX'" :sourceType="'profile'" style="height: 100%" :options="{ height: '100%' }"/>
    </div>
    <div class="md-layout-item">
      <Timeline :id="'elonmusk'" :sourceType="'profile'" style="height: 100%" :options="{ height: '100%' }"/>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';

export default {
  name: 'sp-twitter',
  components: {
    Timeline: Timeline
  }
};
</script>
