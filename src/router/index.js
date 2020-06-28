import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    if(to.name == 'ABout') return next()
    next({ name: "ABout", replace: true });
  }else{
    if(to.name == 'Home') return next()
    next({ name: "Home", replace: true });
  }
})

export default router;
