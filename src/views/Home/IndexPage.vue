<script setup>
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="main-page-background"></div>
  <code id="code">
    {{ `SELECT ${hoverText} FROM Nick;` }}
  </code>
  <div id="scroll-body">
    <div class="progress"></div>
    <div class="cube-wrap">
      <div class="cube">
        <div @mouseover="changeCode('CV')" class="side top">CV</div>
        <div @mouseover="changeCode('Project')" class="side bottom">
          Project
        </div>
        <div @mouseover="changeCode('Information')" class="side front">
          Information
        </div>
        <div @mouseover="changeCode('Interest')" class="side back">
          Interest
        </div>
        <div @mouseover="changeCode('Skills')" class="side left">
          <RouterLink to="/example/main"> Skills </RouterLink>
        </div>
        <div @mouseover="changeCode('*')" class="side right"></div>
      </div>
      <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "ScrollView",
  components: {
    RouterLink,
  },
  data() {
    return {
      hoverText: "Information",
    };
  },
  methods: {
    changeCode(e) {
      this.hoverText = e;
    },
  },
  mounted() {
    let offsetStart = 0;
    let offsetEnd = 0;

    window.addEventListener(
      "scroll",
      () => {
        document.documentElement.style.setProperty(
          "--scroll",
          (window.pageYOffset - offsetStart) /
            (document.body.offsetHeight -
              offsetStart -
              offsetEnd -
              window.innerHeight)
        );
      },
      false
    );
  },
});
</script>

<style lang="scss" scoped>
@import "@/design/var.scss";

#main-page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

#code {
  position: fixed;
  top: 10vh;
  left: 0;
  // border: 1px solid white;
  width: 100%;
  text-align: center;
  font-family: "Fira Code", monospace;
  font-size: 2rem;
  color: $white;
  z-index: 100;
}

#scroll-body {
  padding: 0;
  margin: 0;
  min-height: 500vh;
}

::-webkit-scrollbar {
  background: currentColor;
  width: 10px;
}

::-webkit-scrollbar-track {
  background: currentcolor;
}

::-webkit-scrollbar-thumb {
  background: $white;
  border-radius: 10px;
}

.progress {
  height: 3px;
  width: 0%;
  background-color: $white;
  position: fixed;
  top: 0;
  left: 0;
  animation: progress 1s linear;
}

@keyframes progress {
  0% {
    background-color: $lightSecondary;
    width: 0%;
  }
  100% {
    background-color: $darkSecondary;
    width: 100%;
  }
}

.cube-wrap {
  --size: 30vmin;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  perspective: 100vmin;
}

.cube {
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateZ(45deg) rotateY(-45deg);
  animation: cube 1s linear;
}

@keyframes cube {
  0% {
    transform: rotateX(0deg) rotateZ(45deg) rotateY(-45deg);
  }
  100% {
    transform: rotateX(360deg) rotateZ(45deg) rotateY(-45deg);
  }
}

.side {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: $white;
  backface-visibility: visible;
  top: calc(var(--size) * -0.5);
  left: calc(var(--size) * -0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: $black;
}
.top {
  background-color: $white;
  transform: rotateX(90deg) translateZ(calc(var(--size) * 0.5));
}
.bottom {
  background-color: $gray;
  transform: rotateX(90deg) translateZ(calc(var(--size) * -0.5));
}
.left {
  background-color: $primary;
  transform: rotateY(90deg) translateZ(calc(var(--size) * 0.5));
}
.right {
  background-color: $darkPrimary;
  transform: rotateY(90deg) translateZ(calc(var(--size) * -0.5));
}
.front {
  background-color: $lightPrimary;
  transform: translateZ(calc(var(--size) * 0.5));
}
.back {
  background-color: $secondary;
  transform: translateZ(calc(var(--size) * -0.5));
}

:root * {
  /* Pause the animation */
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
</style>

<style lang="scss" scoped>
$base: 0.6rem;
@import "@/design/var.scss";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.chevron {
  position: absolute;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: $lightPrimary;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}
</style>
