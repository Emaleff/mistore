<template>
  <div class="menu__container">
    <div class="menu__header">
      <div class="menu__title">{{ $t("localizationTitle") }}</div>
      <img
        src="../assets/images/menuclose.svg"
        alt=""
        class="menu__close"
        @click="$emit('localizationClose')"
      />
    </div>
    <div class="menu__content">
      <div class="language">
        <div class="language__title">
          {{ $t("language") }}
        </div>
        <div class="localization__radio_btn">
          <input
            id="radio-1"
            type="radio"
            name="language"
            value="en"
            v-model="language"
            @change="changeLanguage"
          />
          <label for="radio-1">English</label>
        </div>

        <div class="localization__radio_btn">
          <input
            id="radio-2"
            type="radio"
            name="language"
            value="ru"
            v-model="language"
            @change="changeLanguage"
          />
          <label for="radio-2">Русский</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "LocalizationMenu",
  data() {
    return {
      language: "",
    };
  },
  created() {
    this.language = this.$store.getters.getLanguage;
  },

  methods: {
    changeLanguage() {
      localStorage.setItem("language", this.language);
      this.$store.commit("updateLanguage", this.language);
      this.$i18n.locale = this.language;
    },
  },
};
</script>

<style scoped>
.menu__content {
  padding: 24px;
}
.language__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 11px;
  color: #121212;
}
.localization__radio_btn input[type="radio"] {
  display: none;
}
.localization__radio_btn {
  margin-bottom: 8px;
}
.localization__radio_btn label {
  display: inline-block;
  user-select: none;
  cursor: pointer;
  position: relative;
}
.localization__radio_btn label::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  margin-right: 8px;
}
.localization__radio_btn input[type="radio"]:checked + label:before {
  border: 1px solid #121212;
}
.localization__radio_btn input[type="radio"]:checked + label::after {
  content: "";
  background: #121212;
  border: 1px solid #121212;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
  height: 8px;
  width: 8px;
}
</style>
