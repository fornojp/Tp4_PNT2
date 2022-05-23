import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Formulario from "./components/Formulario.vue";
import HttpUsuarios from "./components/HttpUsuarios.vue";
import Presentacion from "./components/Presentacion.vue";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/presentacion" },
    { path: "/formulario", component: Formulario },
    { path: "/http-usuarios", component: HttpUsuarios },
    { path: "/presentacion", component: Presentacion },
  ],
});
