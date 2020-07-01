import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// const routerPush = VueRouter.prototype.push
//
// VueRouter.prototype.push = function(location){
//     return routerPush.call(this.location).catch(error=>error)
// }


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


