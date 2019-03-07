import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBWGPv1pqh60uBALsduTjtjr3dEA0-IVgE",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
