import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/reset.css'
import '@/assets/css/common.scss'

new Vue({
    el: '#app',
    //router,
    components: {
        App
    },
    template: '<App/>'
});

