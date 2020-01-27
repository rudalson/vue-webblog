import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import StatusComponent from './Status'

// global component로 등록하기 위해
Vue.component('AppStatus', StatusComponent)

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    userWasEdited(date) {
      this.$emit('userWasEdited', date)
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.dispatch("getMemberInfo")
  },
  render: h => h(App)
}).$mount('#app')
