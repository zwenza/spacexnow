import Vue from 'vue';
import Router from 'vue-router';
import AgencyList from '@/components/AgencyList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AgencyList',
      component: AgencyList
    }
  ]
});
