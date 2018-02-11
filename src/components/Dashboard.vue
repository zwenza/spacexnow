<template>
  <div class="container-fluid">
      <div class="row">
        <sp-launch-list class="col-md-6"/>
        <Timeline :id="'SpaceX'" :sourceType="'profile'" class="col-md-3" :options="{ height: '100%' }"/>
        <Timeline :id="'elonmusk'" :sourceType="'profile'" class="col-md-3" :options="{ height: '100%' }"/>
      </div>
  </div>
</template>

<script>
import LaunchList from '@/components/space/LaunchList';
import Timeline from 'vue-tweet-embed/timeline';

export default {
  name: 'sp-dashboard',
  components: {
    'sp-launch-list': LaunchList,
    Timeline: Timeline
  }
};
</script>
