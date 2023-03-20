<template>
  <div v-if="modalShow">
    <div class="pop-up-contact-cont">
      <button @click="hideModal">
        <img height="30" src="@/assets/images/close_icon.png" alt="close" />
      </button>
      <div class="contact-cont" v-for="(item, index) in CONTACTS" :key="index">
        <div @click="goToUrl(item.link)" class="contact">
          <p id="title">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent, ref, watch } from "vue";
import { CONTACTS } from "@/utils/constant";
export default defineComponent({
  name: "ContactModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      document
        .getElementsByClassName("pop-up-contact-cont")[0]
        .classList.add("hidden");
      setTimeout(() => {
        this.$emit("close");
      }, 500);
    },
    goToUrl(url) {
      window.open(url, "_blank");
    },
    addClass() {
      document.getElementsByClassName("contact")[0].classList.add("hover");
      console.log("asd");
    },
    removeClass() {
      document.getElementsByClassName("contact")[0].classList.remove("hover");
      console.log("qwe");
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
      CONTACTS,
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

.pop-up-contact-cont {
  position: fixed;
  top: 15vh;
  left: 10vw;
  width: 80vw;
  height: 70vh;
  border: 3px solid $secondary;
  border-radius: 10px;
  background: rgba(152, 133, 163, 0.8);
  padding: 3vh 3vw;
  z-index: 9999;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  button {
    position: fixed;
    top: calc(15vh + 20px);
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

.contact-cont {
  margin: 10px;
  .contact {
    color: $lightSecondary;
    font-size: $normal;
    background-color: rgba(98, 68, 103, 0.7);
    border-radius: 10px;
    border: 3px solid $darkSecondary;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 125px;
    cursor: pointer;
    p {
      text-align: center;
    }
  }
  #title {
    font-size: $subtitle;
    font-weight: bold;
  }
}
</style>