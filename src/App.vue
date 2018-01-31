<template>
  <div id="app">
    <sp-navigation></sp-navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'App',
  components: {
    'sp-navigation': Navigation
  }
};
</script>

<style lang="sass">
@import '~bootstrap/scss/bootstrap';
</style>
