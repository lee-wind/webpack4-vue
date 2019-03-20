import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/Home')
            //component: Home
        },
    ]
});

export default router;
