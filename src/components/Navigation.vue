<template>
  <div class="navigation">
    <WomenMenu class="WomenMenu" :class="{ openWomenMenu: openWomenMenu }" />
    <SearchMenu
      :class="{ searchMenu: searchMenu }"
      @searchClose="searchClose"
    />
    <AuthMenu :class="{authMenu :authMenu}" @authClose="authClose"/>
    <LocalizationMenu
      :class="{ localizationMenu: localizationMenu }"
      @localizationClose="localizationClose"
    />
    <nav class="container navigation__container">
      <a href="#" class="navigation__logo">MiSto</a>
      <div class="navigation__links">
        <a href="#" class="navigation__link"> {{ $t("aboutUs") }}</a>
        <a
          href="#"
          class="navigation__link"
          @click="openWomenMenu = !openWomenMenu"
        >
          {{ $t("women") }}
        </a>
        <a href="#" class="navigation__link"> {{ $t("men") }}</a>
        <a href="#" class="navigation__link"> {{ $t("beauty") }}</a>
        <a href="#" class="navigation__link"> {{ $t("accessories") }}</a>
        <a href="#" class="navigation__link"> {{ $t("blog") }}</a>
        <a href="#" class="navigation__link"> {{ $t("contact") }}</a>
      </div>
      <div class="navigation__actions">
        <a href="#" class="navigation__action">
          <img
            src="../assets/images/Search.svg"
            alt=""
            @click="openSearchMenu"
          />
        </a>
        <a href="#" class="navigation__action"
          ><img
            src="../assets/images/localization.svg"
            alt=""
            @click="openLocalizationMenu"
        /></a>
        <a href="#" class="navigation__action"
          ><img src="../assets/images/user.svg" alt=""
          @click="openAuthMenu"
        /></a>
        <a href="#" class="navigation__action"
          ><img src="../assets/images/shoping-bag.svg" alt=""
        /></a>
      </div>
    </nav>
  </div>
</template>

<script>
import AuthMenu from './AuthMenu';
import LocalizationMenu from "./LocalizationMenu";
import SearchMenu from "./SearchMenu";
import WomenMenu from "./WomenMenu";
export default {
  name: "Navigation",
  data() {
    return {
      searchMenu: false,
      localizationMenu: false,
      authMenu: false,
      openWomenMenu: false,
    };
  },
  components: { SearchMenu, LocalizationMenu, WomenMenu,AuthMenu },
  methods: {
    openSearchMenu() {
      this.searchMenu = true;
      this.$emit("openOverlay");
    },
    searchClose() {
      this.searchMenu = false;
      this.$emit("closeOverlay");
    },
    openLocalizationMenu() {
      this.localizationMenu = true;
      this.$emit("openOverlay");
    },
    localizationClose() {
      this.localizationMenu = false;
      this.$emit("closeOverlay");
    },
    openAuthMenu() {
      this.authMenu = true;
      this.$emit("openOverlay");
    },
    authClose() {
      this.authMenu = false;
      this.$emit("closeOverlay");
    },
  },
};
</script>

<style scoped>
.navigation {
  border-bottom: 2px solid #f8f8f8;
  position: relative;
  transition: 0.5s;
}
.navigation:hover {
  border-color: #121212;
  transition: 0.5s;
}
.navigation__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}
.navigation__logo {
  font-family: PlayfairDisplay;
  font-size: 36px;
  line-height: 42px;
  color: #121212;
  text-decoration: none;
}
.navigation__links {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
.WomenMenu {
  position: absolute;
  top: 67px;
  right: 0;
  left: 0;
  transition: 0.3s;
  height: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.openWomenMenu {
  height: 336px;
  z-index: 99;
}
.navigation__link {
  text-decoration: none;
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #121212;
  margin: 0 16px;
  position: relative;
}
.navigation__link:hover::before {
  content: url("../assets/images/triangle-hover-link.svg");
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
}
.navigation__link:hover {
  cursor: pointer;
  opacity: 0.9;
}
.navigation__actions {
  display: flex;
  align-items: center;
}
.navigation__action {
  margin-left: 20px;
  text-decoration: none;
}
</style>
