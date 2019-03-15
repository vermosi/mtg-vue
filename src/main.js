import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

Vue.use(Vuetify,{
	iconfont: 'fa4'
})
Vue.use(VueRouter)
Vue.component('Search')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
