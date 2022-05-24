<template>
  <div class="advantages">
    <div class="container advantages__container">
      <div class="advantages__item">
        <div class="advantantages__img">
          <img src="../assets/images/advantages1.svg" alt="" />
        </div>
        <div class="advantages__text">
          <div class="advantages__title">
            {{ $t("free-shipping") }}
          </div>
          <div class="advantages__subtitle">
            {{ $t("on-all-order") }}
          </div>
        </div>
      </div>
      <div class="advantages__item">
        <div class="advantantages__img">
          <img src="../assets/images/advantages2.svg" alt="" />
        </div>
        <div class="advantages__text">
          <div class="advantages__title">
            {{ $t("30days-return") }}
            </div>
          <div class="advantages__subtitle">
            {{ $t("simply-return") }}
          </div>
        </div>
      </div>
      <div class="advantages__item">
        <div class="advantantages__img">
          <img src="../assets/images/advantages3.svg" alt="" />
        </div>
        <div class="advantages__text">
          <div class="advantages__title">
            {{ $t("support") }}
            </div>
          <div class="advantages__subtitle">
            {{ $t("contact-us-24") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages",
};
</script>

<style scoped>
.advantages {
  margin-top: 100px;
}
.advantages__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.advantages__item {
  display: flex;
  align-items: center;
}
.advantages__text {
  margin-left: 8px;
}
.advantages__title {
  font-family: Spartan-SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  display: flex;
  align-items: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #121212;
}
.advantages__subtitle {
  font-family: Spartan-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #121212;
  opacity: 0.9;
}
</style>
