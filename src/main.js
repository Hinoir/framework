import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Users from './components/Users'
import OutBuilding from './components/OutBuilding'
import SignUp from './components/SignUp'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: DashBoard },
  { path: '/dashboard/users', component: Users },
  { path: '/dashboard/outbuilding', component: OutBuilding },
  {path: '/signup', component: SignUp},
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
