<template>
  <div class="blog">
    <div class="container blog__container">
      <div class="blog__top-info">
        <div class="blog__title">
          {{ $t("blog-title") }}
        </div>
        <button class="blog__see-all">
          {{ $t("blog-see-all") }}
        </button>
      </div>
      <div class="blog__items">
        <div class="blog__item blog__item-1">
          <div class="blog__item-content">
            <div class="blog__item-title">
              {{ $t("blog-item-title-1") }}
            </div>
            <div class="blog__item-text">{{ $t("blog-item-text-1") }}</div>
            <div class="blog__item-info">
              <div class="blog__item-date">
                {{ $t("blog-item-date-1") }}
              </div>
              <div class="blog__item-read-more">{{ $t("blog-read-more") }}</div>
            </div>
          </div>
        </div>
        <div class="blog__item blog__item-2">
          <div class="blog__item-content">
            <div class="blog__item-title">
              {{ $t("blog-item-title-2") }}
            </div>
            <div class="blog__item-text">
              {{ $t("blog-item-text-2") }}
            </div>
            <div class="blog__item-info">
              <div class="blog__item-date">{{ $t("blog-item-date-2") }}</div>
              <div class="blog__item-read-more">{{ $t("blog-read-more") }}</div>
            </div>
          </div>
        </div>
        <div class="blog__item blog__item-3">
          <div class="blog__item-content">
            <div class="blog__item-title">{{ $t("blog-item-title-3") }}</div>
            <div class="blog__item-text">{{ $t("blog-item-text-3") }}</div>
            <div class="blog__item-info">
              <div class="blog__item-date">{{ $t("blog-item-date-3") }}</div>
              <div class="blog__item-read-more">{{ $t("blog-read-more") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style scoped>
.blog__container {
  padding: 96px 0;
}
.blog__top-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}
.blog__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
}
.blog__see-all {
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.06em;
  color: #121212;
  opacity: 0.6;
  border: 0;
  outline: 0;
  background: transparent;
}
.blog__see-all:hover {
  cursor: pointer;
  opacity: 0.8;
}
.blog__items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog__item-1 {
  background: url("../assets/images/blogitem1.jpg");
}
.blog__item-2 {
  background: url("../assets/images/blogitem2.jpg");
}
.blog__item-3 {
  background: url("../assets/images/blogitem3.jpg");
}
.blog__item {
  background-size: cover;
  width: 350px;
  height: 276px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.blog__item-content {
  background: #ffffff;
  width: 302px;
  box-sizing: border-box;
  padding: 24px 16px 0px;
  position: relative;
  top: 30px;
}
.blog__item-title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  height: 44px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
}
.blog__item-text {
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
  opacity: 0.8;
  margin: 12px 0 24px;
}
.blog__item-content:hover .blog__item-info {
  display: flex;
  height: 20px;
}
.blog__item-info {
  height: 0;
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog__item-date {
  font-family: Spartan-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  color: #121212;
  opacity: 0.6;
}
.blog__item-read-more {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
}
.blog__item-read-more:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
