<template>
  <div class="menu">
    <div class="container women-menu__container">
      <div class="menu__block">
        <div class="menu__title-link">{{ $t("tops") }}</div>
        <div class="menu__link-link">Awesome</div>
        <div class="menu__link-link">Beachwear</div>
        <div class="menu__link-link">Beige</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WomenMenu",
};
</script>

<style scoped>
.menu {
  background: #fff;
  box-sizing: border-box;
  z-index: 999;
}
.women-menu__container {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
}
</style>
