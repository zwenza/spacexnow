import Vue from 'vue';
import Router from 'vue-router';

import LaunchList from '@/components/space/LaunchList';
import PastLaunches from '@/components/space/PastLaunches';
import TweetList from '@/components/misc/TweetList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/upcoming'
    },
    {
      path: '/upcoming',
      name: 'LaunchList',
      component: LaunchList
    },
    {
      path: '/launches',
      name: 'Launches',
      component: PastLaunches
    },
    {
      path: '/twitter',
      name: 'TweetList',
      component: TweetList
    }
  ]
});
