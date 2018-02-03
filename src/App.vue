<template>
  <div id="app">
    <sp-navigation></sp-navigation>
    <router-view/>
    <sp-footer></sp-footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    'sp-navigation': Navigation,
    'sp-footer': Footer
  }
};
</script>

<style lang="sass">
@import '~bootstrap/scss/bootstrap';
</style>
