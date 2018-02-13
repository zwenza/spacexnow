import Vue from 'vue';
import Router from 'vue-router';

import LaunchList from '@/components/space/LaunchList';
import TweetList from '@/components/misc/TweetList';

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
      path: '/twitter',
      name: 'TweetList',
      component: TweetList
    }
  ]
});
