import Vue from 'vue';
import Router from 'vue-router';
import AgencyList from '@/components/AgencyList';
import LaunchList from '@/components/LaunchList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/launches'
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
