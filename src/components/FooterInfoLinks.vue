<template>
  <div class="footer-info-links">
    <div class="container footer-info-links__container">
      <div class="footer-info-links__block">
        <div class="footer-info-links__title">
          {{ $t("categories") }}
        </div>
        <a href="#" class="footer-info-links__link">{{ $t("men") }} </a>
        <a href="#" class="footer-info-links__link"> {{ $t("women") }}</a>
        <a href="#" class="footer-info-links__link">{{ $t("accessories") }}</a>
        <a href="#" class="footer-info-links__link">{{ $t("beauty") }}</a>
      </div>
      <div class="footer-info-links__block">
        <div class="footer-info-links__title">
          {{ $t("information") }}
        </div>
        <a href="#" class="footer-info-links__link">{{ $t("aboutUs") }} </a>
        <a href="#" class="footer-info-links__link"> {{ $t("contactUs") }}</a>
        <a href="#" class="footer-info-links__link"> {{ $t("blog") }}</a>
        <a href="#" class="footer-info-links__link">FAQs</a>
      </div>
      <div class="footer-info-links__block">
        <div class="footer-info-links__title">
          {{ $t("usefulLinks") }}
        </div>
        <a href="#" class="footer-info-links__link">
          {{ $t("terms-condition") }}
        </a>
        <a href="#" class="footer-info-links__link">
          {{ $t("returns-exchanges") }}
        </a>
        <a href="#" class="footer-info-links__link">
          {{ $t("shipping-delivery") }}
        </a>
        <a href="#" class="footer-info-links__link">
          {{ $t("privacy-policy") }}
        </a>
      </div>
      <div class="footer-info-links__block">
        <div class="footer-info-links__title">
          {{ $t("contactUs") }}
        </div>
        <a href="#" class="footer-info-links__link">
          <img src="../assets/images/locationfooter.svg" alt="" />
          {{ $t("address") }}</a
        >
        <a href="tel:+38 (050) 12 34 567" class="footer-info-links__link">
          <img src="../assets/images/phone.svg" alt="" />

          +38 (050) 12 34 567</a
        >
        <a href="#" class="footer-info-links__link">
          <img src="../assets/images/clockfooter.svg" alt="" />
          {{ $t("time") }}
        </a>
        <a
          href="mailto:shaman.magic.music@gmail.com"
          class="footer-info-links__link"
        >
          <img src="../assets/images/mail.svg" alt="" />
          shaman.magic.music@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterInfoLinks",
};
</script>

<style scoped>
.footer-info-links__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0;
}
.footer-info-links__block {
  display: flex;
  flex-direction: column;
}
.footer-info-links__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
  margin-bottom: 8px;
}
.footer-info-links__link {
  font-family: Spartan-Regular;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 34px;
  color: #121212;
  opacity: 0.8;
  display: flex;
  align-items: center;
}
.footer-info-links__link img {
  margin-right: 10px;
}
</style>
