<template>
  <div class="subscribe">
    <div class="container subscribe__container">
      <img
        src="../assets/images/subscribeimg1.png"
        alt=""
        class="subscribe__img subscribe__img-1"
      />
      <form class="subscribe__form">
        <div class="subscribe__subtitle">
          {{ $t("subscribe-subtitle") }}
        </div>
        <div class="subscribe__title">
          {{ $t("subscribe-title") }}
          <span class="subscribe__title-orange">
            {{ $t("subscribe-title-orange") }}
          </span>
        </div>
        <ValidationObserver v-slot="{ invalid }">
          <ValidationProvider name="email" rules="email" v-slot="{ errors }">
            <input
              type="text"
              class="subscribe__input"
              :placeholder="$t('placeholderEmail')"
              v-model="email"
            />
            <span class="err" :key="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>

          <button class="subscribe__button" @click.prevent :disabled="invalid">
            {{ $t("subscribe") }}
          </button>
        </ValidationObserver>
      </form>
      <img
        src="../assets/images/subscribeimg2.png"
        alt=""
        class="subscribe__img subscribe__img-2"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  data() {
    return {
      email: null,
    };
  },
  name: "Subscribe",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      this.locale = this.getLanguage;
    },
  },
};
</script>

<style scoped>
.err {
  color: red;
  font-size: 14px;
  height: 14px;
  display: block;
  margin-top: 8px;
}
.subscribe {
  background: linear-gradient(180deg, #f3f2f2 0%, #dcdbdb 100%);
}
.subscribe__container {
  display: flex;
  justify-content: center;
  position: relative;
}
.subscribe__form {
  width: 532px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 4px;
  text-align: center;
  margin: 60px 0;
}
.subscribe__subtitle {
  font-family: Spartan-Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  opacity: 0.4;
  margin-top: 80px;
  margin-bottom: 16px;
}
.subscribe__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  margin-bottom: 32px;
  max-width: 283px;
  margin-left: auto;
  margin-right: auto;
}
.subscribe__title-orange {
  color: #e91e63;
}
.subscribe__input {
  width: 340px;
  height: 64px;
  background: #f8f8f8;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.subscribe__button {
  width: 340px;
  height: 64px;
  background: #121212;
  border: 2px solid #121212;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-family: Spartan-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.9;
}
.subscribe__button:disabled {
  background: gray;
}
.subscribe__button:disabled:hover {
  cursor: auto;
}
.subscribe__button:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s;
}
.subscribe__img {
  position: absolute;
}
.subscribe__img-1 {
  top: 35px;
  left: 65px;
}
.subscribe__img-2 {
  right: 110px;
  bottom: 0;
}
</style>
