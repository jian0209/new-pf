<template>
  <!-- <p>{{ t("hello") }}</p> -->
  <p>{{ $t("message") }}</p>
  <button @click="changeLanguage">asd</button>
</template>

<script>
import { defineComponent, ref } from "vue";
import i18n from "../i18n";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    // const { t } = useI18n({
    //   inheritLocale: true,
    //   useScope: "local",
    // });

    const isEnglish = ref(true);

    // Something todo ..
    const changeLanguage = () => {
      i18n.global.locale.value = isEnglish.value ? "zh" : "en";
      isEnglish.value = !isEnglish.value;
    };

    return { changeLanguage };
  },
});
</script>
