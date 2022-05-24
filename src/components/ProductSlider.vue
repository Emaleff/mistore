<template>
  <div class="container product__container">
    <!-- swiper2 Thumbs -->
    <div class="cont">
      <swiper
        :options="swiperOptionThumbs"
        class="gallery-thumbs"
        ref="swiperThumbs"
      >
        <swiper-slide
          v-for="number in sliderArr[`${radioValue}`].numbers"
          :key="number"
        >
          <img
            :src="require(`../assets/productsImages/${number}.png`)"
            alt=""
            :key="number"
            class="width-thumbs"
          />
          <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
          ></div>
          <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
          ></div>
        </swiper-slide>
        
      </swiper>
    </div>
    <div class="slider__wrapper">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide
          v-for="number in sliderArr[`${radioValue}`].numbers"
          :key="number"
        >
          <img
            :src="require(`../assets/productsImages/${number}.png`)"
            alt=""
            class="width"
          />
        </swiper-slide>
      </swiper>
    </div>

    <label v-for="(radio, index) in sliderArr" :key="radio.color">
      <input type="radio" v-model="radioValue" :value="index" />
      <span>{{ radio.color }}</span>
    </label>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";
export default {
  props: {
    sliderArr: {
      type: Array,
    },
  },
  methods: {},
  data() {
    return {
      radioValue: 1,
      swiperOptionTop: {
        // notNextTick: true,
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
      },
      swiperOptionThumbs: {
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 3,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical",
        // direction: "vertical",
        // notNextTick: true,
        // spaceBetween: 10,
        // centeredSlides: true,
        // slidesPerView: 3,
        // touchRatio: 0.2,
        // slideToClickedSlide: true,
        loop: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
.product__container {
  display: none;
}
.cont {
  width: 600px;
  height: 500px;
}
/* .swiper-container-horizontal {
  width: 448px;
  height: 560px;
}
.swiper-container-horizontal .swiper-slide {
  width: 448px;
  height: 560px;
} */
/* .swiper-container-vertical {
  height: 130px;
}
.swiper-container-vertical .swiper-slide {
  width: 94px !important;
  height: 100% !important;
} */
/* .swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-container-vertical .swiper-slide img {
  width: 94px;
  height: 114px;
}
.product__container {
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
}
.slider__wrapper {
  width: 50%;
  display: flex;
  height: 560px;
  flex-direction: column;
} */
label {
  margin: 15px;
}
.center {
  margin: 30px;
  text-align: center;
}
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
