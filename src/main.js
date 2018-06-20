// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import vueResource from 'vue-resource'
//Vue.use(vueResource)
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 注册一个全局自定义指令
// Vue.directive('rainbow',{
//   bind(el){
//     el.style.color = 'red'
//   }
// })

Vue.directive('theme',{
  bind(el,binding){
    if(binding.value == 'wide'){
      el.style.color = 'green'
    }else if(binding.value == 'ran'){
      el.style.color = '#313131'
    }
    if(binding.arg == 'lisjs'){
      el.style.background = 'green'
    }
  }
})

// 注册一个全局的过滤器
// Vue.filter('to-upCass',function(value){
//   return value.toUpperCase();
// })
// Vue.filter('snippet',function(value){
//   return value.slice(0,40);
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  components: { App },
  template: '<App/>'
})
