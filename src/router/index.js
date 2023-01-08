/*
 * @Author: peng_chao_qun 1152684231@qq.com
 * @Date: 2022-10-29 20:45:21
 * @LastEditors: peng_chao_qun 1152684231@qq.com
 * @LastEditTime: 2022-10-30 10:59:44
 * @FilePath: /hello-world/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
});

export default router;
