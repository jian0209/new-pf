<script setup>
import "../../design/effect.scss";
import LoadingAni from "../../components/LoadingAni.vue";
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
</script>

<template>
  <div style="padding: 100px">
    <nav>
      <RouterLink to="/example/main">Back</RouterLink>
    </nav>
    <div style="height: 50px" />
    <LoadingAni />
  </div>
</template>

<script>
export default defineComponent({
  name: "LoadingVue",
  components: {
    RouterLink,
    LoadingAni,
  },
});
</script>
