import Vue from "vue";
import Router from "vue-router";

// const routerPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error);
// };

const Home = () => import("../views/home/home.vue");
const Category = () => import("../views/category/category.vue");
const shopcart = () => import("../views/shopcart/shopcart.vue");
const profile = () => import("../views/profile/profile.vue");

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      meta: {
        title: "home"
      }
    },
    {
      path: "/category",
      component: Category,
      meta: {
        title: "Category"
      }
    },
    {
      path: "/shopcart",
      component: shopcart,
      meta: {
        title: "shopcart"
      }
    },
    {
      path: "/profile",
      component: profile,
      meta: {
        title: "profile"
      }
    }
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;