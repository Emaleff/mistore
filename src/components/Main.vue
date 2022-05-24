<template>
  <main class="main">
    <div class="container main__container">
      <div class="slider">
   <Slider />
      </div>
      <div class="main__links">
        <div class="menu__link women">
          <div class="main__link-text">
            {{ $t("women") }}
          </div>
        </div>
        <div class="menu__link men">
          <div class="main__link-text">
            {{ $t("men") }}
          </div>
        </div>
        <div class="menu__link accessories">
          <div class="main__link-text">{{ $t("accessories") }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import Slider from "./Slider.vue";

export default {
  components: { Slider },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // Any other options that can be got from plugin documentation
      },
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
   
  },
};
</script>

<style>
.main__container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.women {
  grid-area: women;
  background: url("../assets/images/mainGrid1.jpg");
}
.men {
  grid-area: men;
  background: url("../assets/images/mainGrid2.jpg");
}
.accessories {
  grid-area: accessories;
  background: url("../assets/images/mainGrid3.jpg");
}
.main__links {
  margin-top: 40px;
  width: 50%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "women men"
    "accessories accessories ";
}
.menu__link {
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}
.main__link-text {
  padding: 13px 24px;
  border-radius: 7px;
  background: #ffffff;
  transition: 0.5s;
}
.main__link-text:hover {
  transition: 0.5s;
  cursor: pointer;
  padding: 20px 32px;
}
.slick-prev.slick-arrow,
.slick-next.slick-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  outline: 0;
  color: transparent;
  position: relative;
}
.slick-prev.slick-arrow:hover,
.slick-next.slick-arrow:hover {
  cursor: pointer;
}
.slick-prev.slick-arrow::before {
  content: url("../assets/images/prev.svg");
  position: absolute;
  left: 12px;
}
.slick-next.slick-arrow::before {
  content: url("../assets/images/next.svg");
  position: absolute;
  left: 16px;
}
.slider {
  width: 540px;
  height: 490px;
}
.slide-wrapp {
  width: 540px;
  height: 490px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.slick-prev.slick-arrow {
  top: 265px;
  left: 15px;
  z-index: 11;
  background: #f9f9f9;
}
.slick-next.slick-arrow {
  top: -270px;
  left: 475px;
  z-index: 11;
  background: #f9f9f9;
}
.slide-banner {
  position: absolute;
  width: 289px;
  height: 100px;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 4px;
  text-align: center;
  padding-top: 24px;
}
.slide-banner__subtitle {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  opacity: 0.4;
}
.slide-banner__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  margin-top: 14px;
}
</style>
