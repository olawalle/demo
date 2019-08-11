import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faPencilAlt, faEnvelope, faBell, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
library.add(faTrash,faPencilAlt, faEnvelope, faBell, faSpinner )

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
