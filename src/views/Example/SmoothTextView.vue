<script setup>
import "../../design/effect.scss";
import SplitTextJS from "split-text-js";
import { defineComponent } from "vue";
import anime from "animejs/lib/anime.es.js";
</script>

<template>
  <div style="padding: 100px">
    <nav>
      <RouterLink to="/example/main">Back</RouterLink>
    </nav>
    <div class="wrapper">
      <div class="text">Smooth text</div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "SmoothTextView",
  mounted() {
    const wrapper = document.querySelector(".wrapper");
    const text = document.querySelector(".text");

    const splittedText = new SplitTextJS(text);

    const animation = (_target, _wrapper) => {
      anime({
        targets: _target,
        opacity: [
          { value: 0, duration: 0 },
          { value: 1, duration: 750, easing: "easeInOutBack", delay: 0 },
        ],
        translateX: [
          { value: -400, duration: 0, easing: "easeOutExpo" },
          { value: 0, duration: 1500, easing: "easeOutExpo" },
        ],
        translateY: [
          { value: 0, duration: 0 },
          {
            value: _wrapper.offsetHeight,
            duration: 250,
            easing: "easeOutExpo",
          },
          { value: 0, duration: 750, easing: "easeInOutBack" },
        ],
        delay: anime.stagger(30),
      });
    };

    setInterval(() => animation(splittedText.chars, wrapper), 5000);
  },
});
</script>
