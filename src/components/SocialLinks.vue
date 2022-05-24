<template>
  <div class="links">
    <a href="https://ru-ru.facebook.com/" target="blank" class="link">
      <img src="../assets/images/facebook.svg" alt="" />
    </a>
    <a href="https://twitter.com/?lang=ru" target="blank" class="link">
      <img src="../assets/images/twitter.svg" alt="" />
    </a>
    <a href="https://www.instagram.com/" target="blank" class="link">
      <img src="../assets/images/instagram.svg" alt="" />
    </a>
    <a href="https://www.pinterest.ru/" target="blank" class="link">
      <img src="../assets/images/pinterest.svg" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
};
</script>

<style scoped>
.link {
  margin-left: 10px;
  text-decoration: none;
}
.link:hover {
  opacity: 0.9;
}
</style>
