import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
// https://jsonplaceholder.typicode.com/todos

// Noted nodejs က ညဏ်ကောင်းတဲ့အတွက်ကြောင့် store folder ကိုပြောလိုက်တာနဲ့ index.js ကို auto ရှာပေးပါတယ် အဲ့ကြောင့် store ထားလိုက်တာပါ တနည်းအားဖြင့် index.js