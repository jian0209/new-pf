<script setup>
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="scroll-body">
    <div class="progress"></div>
    <div class="cube-wrap">
      <div class="cube">
        <div class="side top">asd</div>
        <div class="side bottom">qwe</div>
        <div class="side front">lalala</div>
        <div class="side back">dfg</div>
        <div class="side left">
          <RouterLink to="/example/main"> Back </RouterLink>
        </div>
        <div class="side right">tyu</div>
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
  mounted() {
    var offsetStart = 0;
    var offsetEnd = 0;

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

<style scoped>
#scroll-body {
  padding: 0;
  margin: 0;
  min-height: 500vh;
  background-color: rgb(139, 201, 228);
  animation: body 1s linear;
}
@keyframes body {
  0% {
    background-color: rgb(139, 201, 228);
    color: rgb(139, 201, 228);
  }
  100% {
    background-color: rgb(19, 48, 97);
    color: rgb(19, 48, 97);
  }
}

::-webkit-scrollbar {
  background: currentcolor;
  width: 10px;
}

::-webkit-scrollbar-track {
  background: currentcolor;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 10px;
}

.progress {
  height: 3px;
  width: 0%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  animation: progress 1s linear;
}

@keyframes progress {
  0% {
    background-color: #fff;
    width: 0%;
  }
  100% {
    background-color: rgb(20, 255, 226);
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
  background-color: #eee;
  backface-visibility: visible;
  top: calc(var(--size) * -0.5);
  left: calc(var(--size) * -0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.top {
  background-color: #fff;
  transform: rotateX(90deg) translateZ(calc(var(--size) * 0.5));
}
.bottom {
  background-color: #999;
  transform: rotateX(90deg) translateZ(calc(var(--size) * -0.5));
}
.left {
  background-color: #ccc;
  transform: rotateY(90deg) translateZ(calc(var(--size) * 0.5));
}
.right {
  background-color: #ddd;
  transform: rotateY(90deg) translateZ(calc(var(--size) * -0.5));
}
.front {
  background-color: #aaa;
  transform: translateZ(calc(var(--size) * 0.5));
}
.back {
  background-color: #bbb;
  transform: translateZ(calc(var(--size) * -0.5));
}

:root * {
  /* Pause the animation */
  animation-play-state: paused;
  /* Bind the animation to scroll */
  animation-delay: calc(var(--scroll) * -1s);
  /* These last 2 properites clean up overshoot weirdness */
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
</style>

<style lang="scss" scoped>
$base: 0.6rem;

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
  background: rgb(139, 201, 228);
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
