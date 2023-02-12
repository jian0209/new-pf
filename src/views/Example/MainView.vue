<script setup>
import "../../design/effect.scss";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div style="padding: 100px">
    <nav>
      <RouterLink to="/example/directionHover">
        Go To Direction Hover Box
      </RouterLink>
      <hr />
      <RouterLink to="/example/flicker"> Go To Flicker Effect </RouterLink>
      <hr />
      <RouterLink to="/example/loading"> Go To Loading View </RouterLink>
      <hr />
      <RouterLink to="/example/blur">Go To Blur Effect</RouterLink>
      <hr />
      <RouterLink to="/example/buttonHover">
        Go To Button Hover Effect
      </RouterLink>
      <hr />
      <RouterLink to="/example/tree"> Go To Tree View </RouterLink>
      <hr />
      <RouterLink to="/example/timeline"> Go To Timeline View </RouterLink>
      <hr />
      <RouterLink to="/example/smoothText"> Go To Smooth Text View </RouterLink>
      <hr />
      <RouterLink to="/example/conic"> Go To Conic Effect </RouterLink>
      <hr />
      <RouterLink to="/example/scroll"> Go To Scroll Effect </RouterLink>
    </nav>
  </div>
</template>

<script>
export default defineComponent({
  name: "TestView",
  components: {
    RouterLink,
  },
});
</script>
