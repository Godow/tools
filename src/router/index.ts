import { createRouter, createWebHistory } from "vue-router";
import HomeBody from "@/views/HomeBody.vue";
import * as tools from "@/tools";
import type { ITool } from "@/config.js";
import config from "@/config.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeBody,
  },
];

let routesInfo: ITool[] = [];

routesInfo = routesInfo.concat(Object.values(config.modules).flat());

routesInfo.forEach((tool) => {
  if (tool.type === "function") {
    routes.push({
      path: "/" + tool.path,
      name: tool.path,
      component: tools[tool.path],
    });
  }
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
