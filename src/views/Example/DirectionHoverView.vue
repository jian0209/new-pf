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
    <div class="box">
      <div class="box__right">Right → Left</div>
      <div class="box__left">Left → Right</div>
      <div class="box__top">Top → Bottom</div>
      <div class="box__bottom">Bottom → Top</div>
      <div class="box__center">Hover from any side</div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "DirectionHoverView",
  components: {
    RouterLink,
  },
});
</script>
