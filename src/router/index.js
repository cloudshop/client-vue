import Vue from 'vue'
import Router from 'vue-router'

const Classify = () => import(/* webpackChunkName: "Classify" */ '@/components/Classify') //分类
Vue.use(Router)

const  routes = [
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    }
  ]
// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//     store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        console.log(this.$store.state.token)
        if (this.$store.state.token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
})

// router.afterEach((to,from,next)=>{
//   setTimeout(function () {
//     console.log('拦截');
// }, 0);
// })

export default router;
