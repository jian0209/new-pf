import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/IndexPage.vue";
import AboutView from "@/views/About/IndexPage.vue";
import NotFoundView from "@/views/Error/ErrorNotFound.vue";

import MainView from "@/views/Example/MainView.vue";
import ScrollView from "@/views/Example/ScrollView.vue";
import FlickerView from "@/views/Example/FlickerView.vue";
import DirectionHoverView from "@/views/Example/DirectionHoverView.vue";
import LoadingView from "@/views/Example/LoadingView.vue";
import BlurView from "@/views/Example/BlurView.vue";
import ButtonHoverView from "@/views/Example/ButtonHoverView.vue";
import TreeView from "@/views/Example/TreeView.vue";
import ConicView from "@/views/Example/ConicView.vue";
import TimelineView from "@/views/Example/TimelineView.vue";
import SmoothTextView from "@/views/Example/SmoothTextView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: "/example",
      name: "example",
      children: [
        {
          path: "main",
          name: "main",
          component: MainView,
        },
        {
          path: "directionHover",
          name: "directionHover",
          component: DirectionHoverView,
        },
        {
          path: "flicker",
          name: "flicker",
          component: FlickerView,
        },
        {
          path: "loading",
          name: "loading",
          component: LoadingView,
        },
        {
          path: "blur",
          name: "blur",
          component: BlurView,
        },
        {
          path: "buttonHover",
          name: "buttonHover",
          component: ButtonHoverView,
        },
        {
          path: "tree",
          name: "tree",
          component: TreeView,
        },
        {
          path: "conic",
          name: "conic",
          component: ConicView,
        },
        {
          path: "timeline",
          name: "timeline",
          component: TimelineView,
        },
        {
          path: "smoothText",
          name: "smoothText",
          component: SmoothTextView,
        },
        {
          path: "scroll",
          name: "scroll",
          component: ScrollView,
        },
      ],
    },
    // 404 error
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
