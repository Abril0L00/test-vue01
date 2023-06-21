require('../bootstrap');

import Vue from 'vue';
import vuetify from './vuetify/vuetify';
import router from './router/router';
import App from './pages/App';

export const bus = new Vue();

const admin = new Vue({
    el: '#admin',
    router,
    vuetify,
    render: (h) => h(App)
})
