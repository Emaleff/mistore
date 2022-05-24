<template>
  <div class="footer-rights">
    <div class="container footer-rights__container">
      <div class="footer-rights__rights">
        {{ $t("rights") }}
      </div>
      <div class="footer-rights__icons">
        <img
          src="../assets/images/footerIcon1.png"
          alt=""
          class="footer-rights__icon"
        />
        <img
          src="../assets/images/footerIcon2.png"
          alt=""
          class="footer-rights__icon"
        />
        <img
          src="../assets/images/footerIcon3.png"
          alt=""
          class="footer-rights__icon"
        />
        <img
          src="../assets/images/footerIcon4.png"
          alt=""
          class="footer-rights__icon"
        />
        <img
          src="../assets/images/footerIcon5.png"
          alt=""
          class="footer-rights__icon"
        />
        <img
          src="../assets/images/footerIcon6.png"
          alt=""
          class="footer-rights__icon"
        />
        <img
          src="../assets/images/footerIcon7.png"
          alt=""
          class="footer-rights__icon"
        />
      </div>
      <a
        href="https://www.behance.net/shamandesign"
        target="blank"
        class="footer-rights__author"
      >
        {{ $t("designed") }}
        <span class="footer-rights__author-bold"> 
          {{ $t("designedName") }}
           </span>
      </a>
    </div>
  </div>
</template>

<script>
export default { name: "FooterRights" };
</script>

<style scoped>
.footer-rights {
  background: #f8f8f8;
}
.footer-rights__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
}
.footer-rights__rights {
  font-family: Spartan-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 22px;
  color: #121212;
  opacity: 0.8;
}
.footer-rights__icons {
  display: flex;
  align-items: center;
}
.footer-rights__icon {
  margin: 0 6px;
}
.footer-rights__author {
  font-family: Spartan-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #121212;
  opacity: 0.8;
}
.footer-rights__author:hover {
  cursor: pointer;
}
.footer-rights__author-bold {
  font-family: Spartan-SemiBold;
}
</style>
