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
    <div>
      <div class="zigzag-timeline__item">
        <!-- Milestone -->
        <div className="zigzag-timeline__milestone" />

        <!-- Content -->
        ...content ...content second ...content second ...content second
        ...content second ...content second ...content second ...content second
      </div>
      <div class="zigzag-timeline__item">
        <div className="zigzag-timeline__milestone" />

        <!-- Content -->
        ...content2
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "TimelineView",
  components: {
    RouterLink,
  },
});
</script>
