import Vue from 'vue';
import Router from 'vue-router';

import AgencyList from '@/components/space/AgencyList';
import LaunchList from '@/components/space/LaunchList';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dash'
    },
    {
      path: '/dash',
      name: 'Dashbooard',
      component: Dashboard
    },
    {
      path: '/launches',
      name: 'LaunchList',
      component: LaunchList
    },
    {
      path: '/agencies',
      name: 'AgencyList',
      component: AgencyList
    }
  ]
});
