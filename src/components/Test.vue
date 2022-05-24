<template>
  <div class="test__container">
    <div class="gallery-container">
      <swiper
        class="swiper-container gallery-main"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="number in sliderArr[`${radioValue}`].numbers"
          :key="number"
        >
          <img
            :src="require(`../assets/productsImages/${number}.png`)"
            alt=""
            :key="number"
          />
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <swiper
        class="swiper-container gallery-thumbs"
        ref="swiperThumbs"
        :options="swiperOptionThumbs"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="number in sliderArr[`${radioValue}`].numbers"
          :key="number"
        >
          <img
            :src="require(`../assets/productsImages/${number}.png`)"
            alt=""
            :key="number"
          />
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="product__actions">
      <div class="product__color">
        COLOR:
        <span> {{ sliderArr[`${radioValue}`].color }} </span>
      </div>
      <label
        v-for="(radio, index) in sliderArr"
        :key="radio.color"
        class="label"
      >
        <input
          type="radio"
          v-model="radioValue"
          :value="index"
          class="label__input"
        />
        <img
          :src="require(`../assets/productsImages/${radio.numbers[0]}.png`)"
          alt=""
          class="label__image"
        />
        <span></span>
        <!-- <span>{{ radio.color }}</span> -->
      </label>
    </div>
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
  components: {
    swiper,
    swiperSlide,
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  data() {
    return {
      radioValue: 1,
      swiperOptionTop: {
        // notNextTick: true,
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
        // loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style scoped>
.label__image {
  width: 100%;
  height: 100%;
}
.label__input {
  z-index: -1;
  opacity: 0;
  position: absolute;
}
.label > .label__image {
  opacity: 0.6;
}
.label > span::before {
  content: "";
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* filter: opacity(25%); */
}
.label__image:hover,
.label > .label__input:checked + .label__image {
  opacity: 1;
}
.label:hover {
  cursor: pointer;
}
.label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin: 15px;
  overflow: hidden;
}
.product__color {
  font-family: Spartan;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #12121291;
}
.product__actions {
  padding: 0 30px;
}
.swiper-button-prev,
.swiper-button-next {
  z-index: 999;
}
.test__container {
  display: flex;
}
.gallery-container {
  position: relative;
  width: 730px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.gallery-main {
  width: 448px;
  height: 560px;
  box-shadow: 0 50px 75px 50px rgba(30, 30, 30, 0.18);
  border: 1px solid #e9e9e9;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.gallery-main .swiper-button-prev,
.gallery-main .swiper-button-next {
  position: absolute;
  bottom: 0;
  right: 0;
  top: auto;
  left: auto;
  height: 75px;
  width: 40px;
  color: #e9e9e9;
  background: #1e1e1e;
}
.gallery-main .swiper-button-prev::after,
.gallery-main .swiper-button-next::after {
  font-size: 12px;
}
.gallery-main .swiper-button-prev {
  right: 40px;
  border-right: 1px solid #e9e9e9;
}

.gallery-thumbs {
  order: -1;
  width: 100px;
  height: 300px;
  margin-right: 15px;
  padding-left: 15px;
}
.gallery-thumbs .swiper-slide img {
  transition: 0.3s;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
.gallery-thumbs .swiper-slide-thumb-active img {
  margin-left: -15px;
}
/** * Optionnal */

@keyframes slide-in {
  from {
    opacity: 0;
    right: -50%;
  }
}
</style>
>
