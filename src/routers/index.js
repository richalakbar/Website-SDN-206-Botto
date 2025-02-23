import { createRouter, createWebHistory } from "vue-router";

// Lazy load views
const beranda = () => import("@/views/beranda.vue");
const visimisi = () => import("@/views/visimisi.vue");
const prestasi = () => import("@/views/prestasi.vue");

const routes = [
  { path: "/", component: beranda },
  { path: "/visimisi", component: visimisi },
  { path: "/prestasi", component: prestasi },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
