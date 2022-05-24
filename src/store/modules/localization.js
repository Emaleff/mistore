const Localization = {
  state() {
    return {
      language: null,
    };
  },
  getters: {
    getLanguage(state) {
      if (state.language) {
        return state.language;
      } else return null;
    },
  },
  actions: {
    checkLanguage(ctx) {
      if (localStorage.getItem("language")) {
        ctx.commit("updateLanguage", localStorage.getItem("language"));
      }
    },
  },
  mutations: {
    updateLanguage(state, language) {
      state.language = language;
    },
  },
};

export default Localization;
