<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__info">
        <a href="tel:+38 (050) 12 34 567" class="header__info-item">
          <img src="../assets/images/phone.svg" alt="" />
          <span class="header__text">+38 (050) 12 34 567</span>
        </a>
        <div class="header__info-item">
          <img src="../assets/images/location.svg" alt="" />
          <span class="header__text">{{ $t("address") }}</span>
        </div>
        <div class="header__info-item">
          <img src="../assets/images/clock.svg" alt="" />
          <span class="header__text">{{ $t("time") }}</span>
        </div>
      </div>
      <SocialLinks />
    </div>
  </header>
</template>

<script>
import SocialLinks from "./SocialLinks";
export default {
  name: "Header",
  components: { SocialLinks },
};
</script>

<style scoped>
.header {
  background: #121212;
}
.header__container {
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
}
.header__info {
  display: flex;
}
.header__info-item {
  text-decoration: none;
}
.header__info-item:nth-child(2) {
  margin: 0 24px;
}
.header__text {
  font-family: "Spartan-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #ffffff;
  opacity: 0.8;
  margin-left: 8px;
  vertical-align: middle;
}

</style>
