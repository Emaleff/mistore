<template>
  <div>
    <FooterSocialLinks />
    <FooterInfoLinks />
    <FooterRights />
  </div>
</template>

<script>
import FooterInfoLinks from "./FooterInfoLinks";
import FooterRights from "./FooterRights";
import FooterSocialLinks from "./FooterSocialLinks";
export default {
  name: "Footer",
  components: { FooterSocialLinks, FooterInfoLinks, FooterRights },
};
</script>

<style scoped></style>
