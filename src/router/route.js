const BasicLayout = () =>
  import(/* webpackChunkName: "BasicLayout" */ "@/components/pc/BasicLayout.vue");
const Home = () =>
  import(/* webpackChunkName: "Home" */ "@/views/pc/Home.vue");
const MobileBasicLayout = () => 
  import(/* webpackChunkName: "BasicLayout" */ "@/components/mobile/MobileBasicLayout.vue");
  const ABout = () =>
  import(/* webpackChunkName: "Home" */ "@/views/mobile/ABout.vue");

export default [
  {
    path:"/pc",
    name:"BasicLayout",
    component:BasicLayout,
    children:[
      {
        path:"/pc",
        name:"Home",
        component:Home,
        meta:{
          title:"黎鸿福 - web前端工程师"
        }
      }
    ]
  },
  {
    path:"/mobile",
    name:"MobileBasicLayout",
    component:MobileBasicLayout,
    children:[
      {
        path:"/mobile",
        name:"ABout",
        component:ABout,
        meta:{
          title:"黎鸿福 - web前端工程师"
        }
      }
    ]
  }
]