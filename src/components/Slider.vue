<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide class="slide-wrapp">
      <img src="../assets/images/slide1.jpg" alt="" class="slide-img" />
      <div class="slide-banner">
        <div class="slide-banner__subtitle">Banner</div>
        <div class="slide-banner__title">your Title text</div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-wrapp">
      <img src="../assets/images/slide2.jpg" alt="" class="slide-img" />
      <div class="slide-banner">
        <div class="slide-banner__subtitle">Banner</div>
        <div class="slide-banner__title">your Title text</div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-wrapp">
      <img src="../assets/images/slide3.jpg" alt="" class="slide-img" />
      <div class="slide-banner">
        <div class="slide-banner__subtitle">Banner</div>
        <div class="slide-banner__title">your Title text</div>
      </div>
    </swiper-slide>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";

export default {
  name: "Slider",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: "true",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.swiper-container {
  width: 540px;
  height: 490px;
}
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  outline: 0;
  background: #ffffff;
}
.swiper-button-next::before {
  content: url("../assets/images/next.svg");
  position: absolute;
  left: 17px;
  top: 12px;
}
.swiper-button-prev::before {
  content: url("../assets/images/prev.svg");
  position: absolute;
  left: 12px;
  top: 12px;
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
