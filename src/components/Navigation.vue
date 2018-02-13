<template>
<div>
  <md-toolbar>
    <h3 class="md-title" style="flex: 1">🚀SpaceX Info</h3>
    <md-button class="md-icon-button">
      <md-icon>more_vert</md-icon>
    </md-button>
  </md-toolbar>
  <md-tabs class="md-accent" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
    </div>
</template>
<script>
export default {
  name: 'sp-navigation'
};
</script>
