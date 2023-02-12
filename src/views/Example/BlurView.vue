<script setup>
import "../../design/effect.scss";
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
</script>

<template>
  <div style="height: 200vh; margin: 50%">
    <nav>
      <RouterLink to="/example/main">Back</RouterLink>
    </nav>
    <div id="background__for__blur">
      <div id="blur__background">
        <p>
          background-attachment: fixed <br />
          + <br />
          filter: blur() <br />
          实现毛玻璃效果
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "BlurView",
  components: {
    RouterLink,
  },
});
</script>
