require('../bootstrap');

import Vue from 'vue';
import vuetify from './vuetify/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router/router';
import App from './pages/App';
import 'sweetalert2/dist/sweetalert2.min.css';

export const bus = new Vue();

/*const saOptions = {
    confirmButtonColor: '#CCCE11'
}*/

Vue.use(VueSweetalert2);

const admin = new Vue({
    el: '#admin',
    router,
    vuetify,
    render: (h) => h(App)
})
