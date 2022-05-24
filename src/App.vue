<template>
  <div id="app">
    <Test :sliderArr="sliderArr" />
    <div class="overlay" v-if="overlay"></div>
    <ProductSlider :sliderArr="sliderArr" />
    <Header />
    <Navigation @openOverlay="openOverlay" @closeOverlay="closeOverlay" />
    <Main />
    <Advantages />
    <News />
    <Subscribe />
    <Blog />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Advantages from "./components/Advantages";
import News from "./components/News";
import Subscribe from "./components/Subscribe";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import ProductSlider from "./components/ProductSlider";
import Test from "./components/Test";
export default {
  components: {
    Header,
    Navigation,
    Main,
    Advantages,
    News,
    Subscribe,
    Blog,
    Footer,
    ProductSlider,
    Test,
  },
  data() {
    return {
      sliderArr: [
        {
          color: "yellow",
          numbers: [1, 2, 3, 4],
        },
        {
          color: "white",
          numbers: [5, 6, 7, 8],
        },
        {
          color: "gray",
          numbers: [9, 10, 11, 12],
        },
      ],
      overlay: false,
    };
  },
  methods: {
    openOverlay() {
      this.overlay = true;
    },
    closeOverlay() {
      this.overlay = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: Spartan-SemiBold;
  src: url("./assets/fonts/Spartan-SemiBold.ttf");
}
@font-face {
  font-family: Spartan-Regular;
  src: url("./assets/fonts/Spartan-Regular.ttf");
}
@font-face {
  font-family: PlayfairDisplay;
  src: url("./assets/fonts/PlayfairDisplay.ttf");
}
@font-face {
  font-family: Spartan-Medium;
  src: url("./assets/fonts/Spartan-Medium.ttf");
}
* {
  font-family: Spartan-SemiBold, sans-serif;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1110px;
  margin: 0 auto;
}
#app {
  background: #fefefe;
}
.menu__container {
  background: #fefefe;
  z-index: 10;
  width: 0px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 1s;
}
.menu__container.searchMenu,
.menu__container.localizationMenu,
.menu__container.authMenu {
  width: 388px;
  transition: 1s;
}
.menu__overlay {
  display: none;
}
.menu__container.searchMenu .menu__overlay,
.menu__container.authMenu .menu__overlay,
.menu__container.localizationMenu .menu__overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #6d2f2f;
}

.menu__header {
  background: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 24px;
  box-sizing: border-box;
}
.menu__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
}
.menu__close:hover {
  cursor: pointer;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1212125b;
}
</style>
