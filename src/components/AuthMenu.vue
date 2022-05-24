<template>
  <div class="menu__container">
    <div class="menu__header">
      <div class="menu__title">{{ $t("auth-title") }}</div>
      <img
        src="../assets/images/menuclose.svg"
        alt=""
        class="menu__close"
        @click="$emit('authClose')"
      />
    </div>
    <div class="menu__content">
      <ValidationObserver class="menu__content-action" v-slot="{ invalid }">
        <div class="menu__content-text">
          {{ $t("auth-menu-text") }}
        </div>
        <ValidationProvider
          class="menu__email-block"
          name="email"
          rules="email|required"
          v-slot="{ errors }"
        >
          <div class="menu__input-title">{{ $t("email") }}</div>
          <input
            type="email"
            class="menu__input"
            :placeholder="$t('placeholderEmail')"
            v-model="email"
          />
          <span class="err" :key="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="menu__password-block"
          name="password"
          rules="required|min:6"
          v-slot="{ errors }"
        >
          <div class="menu__password-title-and-info">
            <div class="menu__input-title">{{ $t("password") }}</div>
            <a href="#" class="menu__password-info">{{
              $t("password-info")
            }}</a>
          </div>
          <input
            type="password"
            class="menu__input"
            :placeholder="$t('placeholderPassword')"
            v-model="password"
          />
          <span class="err" :key="errors[0]">{{ errors[0] }}</span>
        </ValidationProvider>
        <button
          class="menu__submit"
          :disabled="invalid"
          v-if="isLogin"
          @click="login"
        >
          <span class="menu__submit-text">
            {{ $t("login") }}
          </span>
        </button>
        <button
          class="menu__submit"
          :disabled="invalid"
          @click="registration"
          v-else
        >
          <span class="menu__submit-text">
            {{ $t("registration") }}
          </span>
        </button>
      </ValidationObserver>
      <div class="menu__change-auth">
        <div class="menu__change-auth-text">
          {{ $t("new-customer") }}
        </div>
        <button
          class="menu__change-auth-btn"
          v-if="isLogin"
          @click="isLogin = !isLogin"
        >
          <span class="menu__change-auth-btn-text" key="islogin">
            {{ $t("create-account") }}
          </span>
        </button>
        <button
          class="menu__change-auth-btn"
          v-else
          @click="isLogin = !isLogin"
        >
          <span class="menu__change-auth-btn-text" key="isRegistration">
            {{ $t("login-account") }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapGetters } from "vuex";

export default {
  name: "AuthMenu",
  data() {
    return {
      email: null,
      password: null,
      isLogin: true,
    };
  },
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  watch: {
    getLanguage() {
      this.locale = this.getLanguage;
    },
  },
  components: { ValidationObserver, ValidationProvider },

  methods: {
    async registration() {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_APIKEY}`;
        const { data } = await axios.post(url, {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        });
        console.log(data);
        // this.$store.commit("updateTkn", data.idToken);
        // this.$store.commit("updateMail", data.email);
        // localStorage.setItem("tkn", data.idToken);
        // localStorage.setItem("email", data.email);
      } catch (e) {
        alert(e.response.data.error.message);
      }
    },
    async login() {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_APIKEY}`;
        const { data } = await axios.post(url, {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        });
        console.log(data);
        // this.$store.commit("updateTkn", data.idToken);
        // this.$store.commit("updateMail", data.email);
        // localStorage.setItem("tkn", data.idToken);
        // localStorage.setItem("email", data.email);
      } catch (e) {
        alert(e.response.data.error.message);
      }
    },
  },
};
</script>

<style scoped>
.menu__content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
}
.menu__content-text {
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
  margin-bottom: 24px;
}
.menu__input-title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  margin-bottom: 8px;
}
.menu__password-title-and-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu__input {
  height: 48px;
  width: 100%;
  background: #f8f8f8;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  padding: 15px;
  font-family: Spartan-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.menu__password-block {
  margin: 32px 0;
  display: block;
}
.menu__password-info {
  text-decoration: none;
  font-family: "Spartan";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #121212;
  opacity: 0.6;
}
.menu__password-info:hover {
  cursor: pointer;
}
.menu__submit {
  display: flex;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border: 1px solid #121212;
  background: #121212;
  margin-top: 32px;
}
.menu__submit:disabled {
  background: gray;
}
.menu__submit:disabled:hover {
  cursor: auto;
}
.menu__submit:hover {
  cursor: pointer;
}
.menu__submit-text {
  font-family: "Spartan";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.9;
}
.menu__change-auth {
  margin-top: 25px;
}
.menu__change-auth-text {
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #121212;
}
.menu__change-auth-btn {
  box-sizing: border-box;
  border: 0;
  outline: 0;
  width: 340px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  margin-top: 16px;
  margin-bottom: 40px;
}
.menu__change-auth-btn:hover {
  cursor: pointer;
}
.menu__change-auth-btn-text {
  font-family: Spartan-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  opacity: 0.9;
}
.err {
  color: red;
  font-size: 14px;
}
</style>
