import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test2 from '@/components/test2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test1',
      component: HelloWorld
    },
    {
      path: '/test2',
      component: test2
    }

  ]
})
