import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '~/plugins'
import '~/components'
import VueTyperPlugin from 'vue-typer'

import VScrollLock from 'v-scroll-lock'
Vue.use(VScrollLock)

import VueStar from 'vue-star'
Vue.component('VueStar', VueStar)

Vue.config.productionTip = false

/* hello.js integration */
const HelloJs = require('hellojs/dist/hello.all.min.js')
const VueHello = require('vue-hellojs')
HelloJs.init({
  google: '634416516335-nlf8vm4ag3i4v7e8mnsvej5cb53um9mb.apps.googleusercontent.com',
  facebook: '180916992476061'
}, {
  scope: 'email',
  redirect_uri: '/acasa'
})


Vue.use(Vuetify)
Vue.use(VueTyperPlugin)
Vue.use(VueHello, HelloJs)
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
