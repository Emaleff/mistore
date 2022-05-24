<template>
  <div class="footer-social-links">
    <div class="container footer-social-links__container">
      <div class="footer-social-links__text">
        {{ $t("social-links-text") }}:
      </div>
      <form @click.prevent class="footer-social-links__form">
        <ValidationObserver
          v-slot="{ invalid }"
          class="footer-social-links__wrapp"
        >
          <ValidationProvider class="input" name="email" rules="email">
            <input
              type="text"
              class="footer-social-links__input"
              :placeholder="$t('placeholderEmail')"
              v-model="email"
              :class="{ invalid: invalid }"
            />
          </ValidationProvider>
          <button class="footer-social-links__submit" :disabled="invalid">
            {{ $t("footer-form-button") }}
          </button>
        </ValidationObserver>
      </form>
      <SocialLinks />
    </div>
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  data() {
    return {
      email: null,
    };
  },
  components: { SocialLinks, ValidationObserver, ValidationProvider },
  name: "FooterSocialLinks",
};
</script>

<style scoped>
.footer-social-links {
  background: #121212;
}
.footer-social-links__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}
.footer-social-links__text {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
}
.footer-social-links__form {
  display: flex;
  align-items: center;
}
.footer-social-links__input {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  width: 520px;
  height: 32px;
  box-sizing: border-box;
  background: #ffffff57;
  opacity: 0.5;
  padding-left: 16px;
  border: 1px solid transparent;
  margin-right: 12px;
  outline: 0;
}
.footer-social-links__input.invalid {
  border: 1px solid red;
}
.footer-social-links__submit {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  background: #121212;
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  transition: 0.5s;
  opacity: 0.9;
}
.footer-social-links__submit:disabled {
  background: gray;
}
.footer-social-links__submit:disabled:hover {
  cursor: auto;
}
.footer-social-links__submit:hover {
  transition: 0.5s;
  cursor: pointer;
  background: #ffffff;
  color: #121212;
}
</style>
