<script setup>
import { defineComponent } from "vue";
// import { RouterLink } from "vue-router";
import { getDetailInBox, detectDeviceType } from "@/utils/util";
// import Shape from "@/layout/shape.js";
import SkillsModalVue from "./Modal/SkillsModal.vue";
import ContactModal from "./Modal/ContactModal.vue";
import InformationModal from "./Modal/InformationModal.vue";
import InformationPhoneModal from "./Modal/InformationPhoneModal.vue";
</script>

<template>
  <!-- <canvas class="canvas"></canvas> -->
  <div id="main-page-background" @click="shakeModal"></div>
  <code id="code">
    {{ `SELECT ${hoverText} FROM Nick;` }}
  </code>
  <div id="scroll-body">
    <div class="progress"></div>
    <div class="cube-wrap">
      <div class="cube">
        <div @mouseover="changeCode('CV')" class="side top"><p>CV</p></div>
        <div @mouseover="changeCode('Projects')" class="side bottom">
          <p>{{ $t("cube.projects") }}</p>
        </div>
        <div
          @click="showInformationModal"
          @mouseover="changeCode('Information')"
          class="side front"
        >
          <p>{{ $t("cube.information") }}</p>
        </div>
        <div @mouseover="changeCode('Interests')" class="side back">
          <p>{{ $t("cube.interests") }}</p>
        </div>
        <div
          @click="showSkillModal"
          @mouseover="changeCode('Skills')"
          class="side left"
        >
          <p>{{ $t("cube.skills") }}</p>
        </div>
        <div
          @click="showContactModal"
          @mouseover="changeCode('Contact')"
          class="side right"
        >
          <p>{{ $t("cube.contact") }}</p>
        </div>
      </div>
      <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div>
  </div>
  <SkillsModalVue :show="showSkill" @close="hideModal" />
  <ContactModal :show="showContact" @close="hideModal" />
  <InformationModal :show="showInformation" @close="hideModal" />
  <InformationPhoneModal :show="showPhoneInformation" @close="hideModal" />
</template>

<script>
export default defineComponent({
  name: "ScrollView",
  components: {
    // RouterLink,
    SkillsModalVue,
    ContactModal,
    InformationModal,
    InformationPhoneModal,
  },
  data() {
    return {
      showSkill: false,
      showContact: false,
      showInformation: false,
      showPhoneInformation: false,
      hoverText: "Information",
    };
  },
  methods: {
    changeCode(e) {
      this.hoverText = e;
    },
    showSkillModal() {
      this.showSkill = true;
    },
    showContactModal() {
      this.showContact = true;
    },
    showInformationModal() {
      if (detectDeviceType(navigator.userAgent) === "m") {
        this.showPhoneInformation = true;
      } else {
        this.showInformation = true;
      }
    },
    hideModal() {
      this.showSkill = false;
      this.showContact = false;
      this.showInformation = false;
      this.showPhoneInformation = false;
    },
  },
  mounted() {
    let offsetStart = 0;
    let offsetEnd = 0;

    // Shape.init();

    window.addEventListener(
      "scroll",
      () => {
        if (
          detectDeviceType(navigator.userAgent) === "m" ||
          detectDeviceType(navigator.userAgent) === "t"
        ) {
          this.hoverText = getDetailInBox(window.pageYOffset);
        }
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

.canvas {
  z-index: 9999;
  background-color: $primary;
  position: fixed;
  top: 0;
  left: 0;
}

#main-page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

#code {
  position: fixed;
  top: 3vh;
  left: 0;
  // border: 1px solid white;
  width: 100%;
  text-align: center;
  font-family: "Fira Code", monospace;
  font-size: $title;
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
  cursor: pointer;
  p {
    font-size: $normal;
  }
}
.top {
  background-color: $white;
  transform: rotateX(90deg) translateZ(calc(var(--size) * 0.5));
}
.bottom {
  background-color: $gray;
  transform: rotateX(90deg) translateZ(calc(var(--size) * -0.5));
  p {
    transform: rotateX(180deg);
  }
}
.left {
  background-color: $primary;
  transform: rotateY(90deg) translateZ(calc(var(--size) * 0.5));
}
.right {
  background-color: $lightSecondary;
  transform: rotateY(90deg) translateZ(calc(var(--size) * -0.5));
  p {
    transform: rotateX(180deg);
  }
}
.front {
  background-color: $lightPrimary;
  transform: translateZ(calc(var(--size) * 0.5));
  p {
    transform: rotateZ(270deg);
  }
}
.back {
  background-color: $secondary;
  transform: translateZ(calc(var(--size) * -0.5));
  p {
    transform: rotateX(180deg) rotateZ(90deg);
  }
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
