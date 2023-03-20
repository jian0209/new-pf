<template>
  <div v-if="modalShow">
    <div class="pop-up-skills-cont">
      <button @click="hideModal">
        <img height="30" src="@/assets/images/close_icon.png" alt="close" />
      </button>
      <div class="skill-cont" v-for="(item, index) in SKILLS_SET" :key="index">
        <p id="title">{{ item.title }}</p>
        <div id="hor-cont">
          <div v-for="(skill, index2) in item.skills" :key="index2" id="skill">
            <p>{{ skill.name }}</p>
            <div class="progress">
              <div
                class="progress-bar"
                :style="'--level: ' + skill.level + '%'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { SKILLS_SET } from "@/utils/constant";
export default defineComponent({
  name: "SkillsModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      document
        .getElementsByClassName("pop-up-skills-cont")[0]
        .classList.add("hidden");
      setTimeout(() => {
        this.$emit("close");
      }, 500);
    },
  },
  setup(props) {
    const modalShow = ref(props.show);
    watch(
      () => props.show,
      (val) => {
        modalShow.value = val;
      }
    );
    return {
      SKILLS_SET,
      modalShow,
    };
  },
  mounted() {
    return {
      SKILLS_SET,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/design/var.scss";

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.pop-up-skills-cont {
  position: fixed;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  border: 3px solid $secondary;
  border-radius: 10px;
  background: rgba(152, 133, 163, 0.8);
  padding: 3vh 3vw;
  z-index: 9999;
  overflow-y: scroll;
  button {
    position: fixed;
    top: calc(10vh + 20px);
    right: calc(10vw + 20px);
    border: none;
    background: none;
    cursor: pointer;
    z-index: 9999;
  }
  animation: fade-in 0.5s ease-in-out;
}

.hidden {
  animation: fade-out 0.5s ease-in-out;
}

.skill-cont {
  #title {
    font-size: $subtitle;
    font-weight: bold;
  }
  #hor-cont {
    margin: 20px 0;
    overflow: auto;
    white-space: nowrap;
    #skill {
      color: $lightSecondary;
      font-size: $normal;
      background-color: rgba(98, 68, 103, 0.7);
      border-radius: 10px;
      border: 3px solid $darkSecondary;
      display: inline-block;
      width: 250px;
      padding: 30px;
      margin-right: 20px;
      p {
        text-align: center;
      }
    }
  }
}

.progress {
  margin: 50px auto;
  padding: 2px;
  width: 100%;
  max-width: 500px;
  background: $white;
  border: 3px solid $gray;
  border-radius: 20px;
  height: 30px;
}

.progress .progress-bar {
  height: 100%;
  width: var(--level);
  border-radius: 15px;
  background: repeating-linear-gradient(
    135deg,
    $primary,
    $primary 20px,
    $darkPrimary 20px,
    $darkPrimary 40px
  );
  animation: fill-bar 1s ease-in-out;
}

@keyframes fill-bar {
  from {
    width: 0%;
  }
  to {
    width: var(--level);
  }
}
</style>