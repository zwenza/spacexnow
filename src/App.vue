<template>
   <md-app md-waterfall md-mode="fixed-last" style="height: 100vh">
      <md-app-toolbar class="md-large md-dense md-primary">
         <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
               <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                  <md-icon>menu</md-icon>
               </md-button>
               <span class="md-title">🚀 SpaceX Info</span>
            </div>
            <div class="md-toolbar-section-end">
               <md-button class="md-icon-button">
                  <md-icon>more_vert</md-icon>
               </md-button>
            </div>
         </div>
         <div class="md-toolbar-row">
            <md-tabs class="md-primary" md-sync-route>
               <md-tab id="tab-home" md-label="Upcoming Launches" to="/launches"></md-tab>
               <md-tab id="tab-pages" md-label="Twitter" to="/twitter"></md-tab>
            </md-tabs>
         </div>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
         <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
         <md-list>
            <md-list-item>
               <md-icon>error</md-icon>
               <span class="md-list-item-text">TODO</span>
            </md-list-item>
         </md-list>
      </md-app-drawer>
      <md-app-content style="height: 100%">
         <router-view/>
      </md-app-content>
   </md-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    'sp-navigation': Navigation,
    'sp-footer': Footer
  },
  data: function() {
    return {
      menuVisible: false
    };
  }
};
</script>
