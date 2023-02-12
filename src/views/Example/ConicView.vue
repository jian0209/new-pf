<script setup>
import "../../design/effect.scss";
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
</script>

<template>
  <div style="padding: 100px">
    <nav>
      <RouterLink to="/example/main">Back</RouterLink>
    </nav>
    <div class="conic conic__demo"></div>
  </div>
</template>

<script>
export default defineComponent({
  name: "ConicView",
  components: {
    RouterLink,
  },
});
</script>
