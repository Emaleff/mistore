<template>
  <div class="news">
    <div class="container news__container">
      <div class="news__item news__item-1">
        <div class="news__item-text">
          <div class="news__item-subtitle">
            {{ $t("news-item1-subtitle") }}
          </div>
          <div class="news__item-title">
            {{ $t("news-item1-title") }}
          </div>
        </div>
      </div>
      <div class="news__item news__item-2">
        <div class="news__item-text">
          <div class="news__item-subtitle">
            {{ $t("news-item2-subtitle") }}
          </div>
          <div class="news__item-title">
            {{ $t("news-item2-title") }}
            <span class="news__item-text-orange">
              {{ $t("news-item2-title-orange") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
  margin-bottom: 75px;
}
.news__item {
  width: 540px;
  height: 260px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.news__item-1 {
  background: url("../assets/images/newsitem1.jpg");
}
.news__item-2 {
  background: url("../assets/images/newsitem2.jpg");
}
.news__item-text {
  width: 293px;
  height: 71px;
  box-sizing: border-box;
  text-align: center;
  padding-top: 16px;
  background: #ffffff;
  border-radius: 4px;
}
.news__item-subtitle {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  opacity: 0.6;
}
.news__item-title {
  margin-top: 8px;
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.news__item-text-orange {
  color: #e91e63;
}
</style>
