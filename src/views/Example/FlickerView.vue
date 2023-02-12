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
    <h1 class="flicker">这里有字</h1>
  </div>
</template>

<script>
export default defineComponent({
  name: "FlickerView",
  components: {
    RouterLink,
  },
});
</script>
