import App from './App'
import Vue from 'vue'

import { getLocalArrValue, strContainStr } from '@/utils/util'
import { ACCESSCONFIG } from '@/utils/accessConfig'
Vue.prototype.getLocalArrValue = getLocalArrValue // 权限控制
Vue.prototype.strContainStr = strContainStr // 权限控制
Vue.prototype.ACCESSCONFIG = ACCESSCONFIG // 权限控制
// 判断按钮权限
Vue.prototype.getShowes = function(value) {
  const arr = this.getLocalArrValue('rwz_date')
  if (this.strContainStr(arr, value)) {
    return true
  }
  return false
}


Vue.prototype.productionTip = false

import uView from 'uview-ui'
Vue.use(uView)

import {configApi} from '@/common/configApi.js'

configApi({
	'app_secret': 'BC3.342.78',
	'appid': 'BC100',
	'configCode': 'test-http'
}).then(res=>{
	var data = res.data.result[0]
	// console.log('data',data)
	uni.setStorageSync('configApiPrefix',data)
}).catch(error=>{
	console.log(error)
})

App.mpType = 'app'

const app = new Vue({
    ...App
})

// // http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
// import httpInterceptor from '@/common/request.js'
// Vue.use(httpInterceptor, app)

// // http接口API集中管理引入部分
// import httpApi from '@/common/api.js'
// Vue.use(httpApi, app)

app.$mount()
