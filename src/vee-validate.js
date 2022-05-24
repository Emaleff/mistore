import Vue from "vue";
import { extend, localize } from "vee-validate";
import { min, required, email } from "vee-validate/dist/rules";

// Install rules
extend("required", required);
extend("min", min);
extend("email", email);

// Install messages

localize({
  ru: {
    messages: {
      required: "Обязательное поле",
      email: "Невалидный адрес электронной почты",
      min: "Минимум {length} символов",
      max: (_, { length }) =>
        `this field must have no more than ${length} characters`,
    },
  },
  en: {
    messages: {
      required: "required",
      email: "invalid email",
      min: "min {length} symbol",
      max: (_, { length }) =>
        `this field must have no more than ${length} characters`,
    },
  },
});

let LOCALE = "en";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
  get() {
    return LOCALE;
  },
  set(val) {
    LOCALE = val;
    localize(val);
  }
});
