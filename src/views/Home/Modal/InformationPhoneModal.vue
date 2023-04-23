<template>
  <div v-if="modalShow">
    <div class="pop-up-information-cont">
      <button @click="hideModal">
        <img height="30" src="@/assets/images/close_icon.png" alt="close" />
      </button>
      <div class="information-cont">
        <p id="title">Information</p>
        <div id="hor-cont">
          <div id="info">
            <p>Name</p>
            <p>Age</p>
          </div>
          <div id="info">
            <p>: {{ NAME }}</p>
            <p>: {{ AGE }}</p>
            <p>: {{ ADDRESS }}</p>
            <p>: {{ PHONE }}</p>
            <p>: {{ EMAIL }}</p>
            <p>: {{ WEBSITE }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "InformationPhoneModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      document
        .getElementsByClassName("pop-up-information-cont")[0]
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
      modalShow,
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

.pop-up-information-cont {
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
</style>
