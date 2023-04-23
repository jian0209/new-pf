<template>
  <div v-if="modalShow">
    <div class="pop-up-information-cont" v-on:scroll="_onScroll">
      <button @click="hideModal">
        <img height="30" src="@/assets/images/close_icon.png" alt="close" />
      </button>
      <div class="information-cont">
        <p class="title">Introduction</p>
        <div class="information-content-cont">
          <p class="norm">
            Hi, my name is Nicholas, and I am a software developer with over 2
            years of experience in backend, frontend, and DevOps. I'm excited to
            share with you my portfolio, which showcases some of my best work in
            software development.
          </p>
          <p class="norm last-p">
            I'm passionate about software development and I'm willing to learn
            in further ways to improve my own skills and performance in the
            future. I believe that there's always something new to learn and I'm
            excited to continue growing and evolving as a developer.
          </p>
        </div>
      </div>
      <div class="information-cont">
        <p class="title">Experience Talk</p>
        <div class="information-content-cont">
          <p class="norm">
            In my backend work, I specialize in languages like Golang, NodeJs,
            and Java. I've had the opportunity to work on a variety of projects,
            from developing APIs to integrating third-party services, and I take
            pride in delivering clean, efficient code.
          </p>
          <p class="norm">
            I'm passionate about software development and I'm willing to learn
            in further ways to improve my own skills and performance in the
            future. I believe that there's always something new to learn and I'm
            excited to continue growing and evolving as a developer. My frontend
            work focuses on creating responsive, user-friendly interfaces using
            technologies such as React and Vue. I believe that good design is
            just as important as good functionality, and I'm always looking for
            ways to improve the user experience.
          </p>
          <p class="norm last-p">
            In addition to my development work, I'm also experienced in DevOps
            practices, using tools like Docker and AWS to streamline workflows
            and improve collaboration. I believe that the key to successful
            software development is communication and teamwork, and I'm always
            looking for ways to contribute to a positive, collaborative
            environment.
          </p>
        </div>
      </div>
      <div class="horizontal-cont">
        <div class="information-cont">
          <p class="title">Education</p>
          <div class="information-content-cont">
            <p class="norm">
              I earned my Diploma of Information and Communications Technology
              (Software Engineering) from Asia Pacific University in December
              2021. During my time in university, I took a variety of courses
              that helped to develop my skills in programming, database
              management, software development, and fundemental of computer
              science.
            </p>
            <p class="norm last-p">
              Some of the courses I took include Java, Visual Basic, Web
              Development using PHP, and Database Management. These courses
              provided me with experience in programming languages such as Java,
              as well as web development technologies like PHP and database
              management.
            </p>
          </div>
        </div>
        <div class="information-cont right-side" v-if="isShowCourse">
          <div
            v-for="(education, index) in EDUCATION"
            :key="index"
            id="course"
            class="information-content-cont animation-slide-in"
            :style="'animation-delay: ' + index * 0.1 + 's'"
          >
            <p class="norm stick">
              {{ education.name }}
            </p>
            <div class="progress">
              <div
                class="progress-bar"
                :style="'--level: ' + education.result + '%'"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="information-cont">
        <p class="title">Acknowledgement</p>
        <div class="information-content-cont">
          <p class="norm last-p">
            Thank you for taking the time to check out my portfolio, and I hope
            that it gives you a better understanding of my skills and
            experience. Whether you're looking to build a new application or
            optimize an existing one, I'm excited to work with you to bring your
            vision to life.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { EDUCATION } from "@/utils/constant";
// import { debounce } from "@/utils/util";

export default defineComponent({
  name: "InformationModal",
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
    _onScroll(event) {
      const SCROLL_Y = event.target.scrollTop;
      this.scrollEvent(SCROLL_Y);
    },
  },
  setup(props) {
    const modalShow = ref(props.show);
    const isShowCourse = ref(false);

    watch(
      () => props.show,
      (val) => {
        modalShow.value = val;
      }
    );

    const scrollEvent = (positionY) => {
      if (positionY > 900) {
        isShowCourse.value = true;
      }
      if (positionY < 650) {
        isShowCourse.value = false;
      }
    };
    return {
      modalShow,
      EDUCATION,
      scrollEvent,
      isShowCourse,
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

@keyframes slide-in-from-left {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
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

.information-cont {
  width: 48%;
  .information-content-cont {
    background-color: rgba(98, 68, 103, 0.7);
    border-radius: 10px;
    border: 3px solid $darkSecondary;
    color: $lightSecondary;
    padding: 2vh 2vw;
    width: 100%;
    margin-bottom: 2vh;
    .last-p {
      margin-bottom: 0;
    }
  }
  .title {
    font-size: $subtitle;
    font-weight: bold;
  }
  .norm {
    font-size: $normal;
    margin-bottom: 2vh;
  }
}

.right-side {
  overflow: hidden;
  padding-top: 38.398px;
  padding-bottom: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .information-content-cont {
    margin-bottom: 0;
    height: 62px;
    .stick {
      position: absolute;
      width: 305px;
      left: 2vh;
      top: 12px;
    }
    .progress {
      position: absolute;
      right: 2vh;
      top: 12px;
    }
  }
  .animation-slide-in {
    overflow: hidden;
    width: 0;
    animation: 1s ease-in slide-in-from-left forwards;
  }
}

#course {
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
  }

  .progress {
    padding: 2px;
    width: calc(100% - 305px);
    // max-width: 500px;
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
    animation: fill-bar 2s ease-in-out;
  }

  @keyframes fill-bar {
    from {
      width: 0%;
    }
    to {
      width: var(--level);
    }
  }
}

.horizontal-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
