<template>
  <div class="menu__container">
    <div class="menu__header">
      <div class="menu__title">{{ $t("searchTitle") }}</div>
      <img
        src="../assets/images/menuclose.svg"
        alt=""
        class="menu__close"
        @click="$emit('searchClose')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMenu",
};
</script>

<style scoped>

</style>
