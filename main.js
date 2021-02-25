import Vue from 'vue'
import uView from "uview-ui";
Vue.use(uView);
import App from './App'

import store from './store'

import {uniSteps} from '@dcloudio/uni-ui'
Vue.component('uni-steps',uniSteps);

import request from 'commom/request.js'
Vue.prototype.$request = request



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
