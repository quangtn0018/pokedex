import Vue from 'vue'
import VueRouter from 'vue-router'

// http://quasar-framework.org/guide/routes-lazy-loading.html#Avoiding-lazy-loading
// Avoiding generating chunk

import Home from '@/page/Home.vue'
import CompletePokedex from '@/page/CompletePokedex.vue'
import GenerationOne from '@/page/GenerationOne.vue'
import GenerationTwo from '@/page/GenerationTwo.vue'
import GenerationThree from '@/page/GenerationThree.vue'
import GenerationFour from '@/page/GenerationFour.vue'
import GenerationFive from '@/page/GenerationFive.vue'
import GenerationSix from '@/page/GenerationSix.vue'
import GenerationSeven from '@/page/GenerationSeven.vue'

Vue.use(VueRouter)

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    // { path: '/', component: load('Hello') }, // quasar default init route
    {
      path: '/', component: Home,
      children: [
        { path: '', component: CompletePokedex },
        { path: '/generation1', component: GenerationOne },
        { path: '/generation2', component: GenerationTwo },
        { path: '/generation3', component: GenerationThree },
        { path: '/generation4', component: GenerationFour },
        { path: '/generation5', component: GenerationFive },
        { path: '/generation6', component: GenerationSix },
        { path: '/generation7', component: GenerationSeven }
      ]
    },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
