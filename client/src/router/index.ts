import { createRouter, createWebHistory } from 'vue-router';

import { web } from './web';
import { config } from './config';

import WebWrapper from '@/components/layouts/web/WebWrapper.vue';
import ConfigWrapper from '@/components/layouts/config/ConfigWrapper.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: WebWrapper,
      children: web,
      meta: { title: 'LikeZap' }
    },
    {
      path: '/config',
      component: ConfigWrapper,
      children: config,
      meta: { title: 'LikeZap - Configurator' }
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
})

export default router
