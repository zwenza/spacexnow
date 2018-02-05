<template>
  <div>
    <b-card :title="launch.rocket.rocket_name"
            style="sp-launch-card">
      <i class="fas fa-map-marker-alt"></i> <i>{{launch.launch_site.site_name_long}}</i>
    </b-card>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'sp-launch',
  props: ['launch']
};
</script>
