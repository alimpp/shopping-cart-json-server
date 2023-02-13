<template>
  <div
    class="desktop-nav"
    :class="{
      nav_dark_mode_theme: watchTheme === 'dark',
      nav_light_mode_theme: watchTheme === 'light',
    }"
  >
    <div class="logo-container">
      <img src="@/assets/icons/app-logo.png" alt="logo" />
    </div>
    <div class="items-container">
      <div class="d-flex mx-5 px-5">
        <span class="application_pointer" @click="goToHome">{{ $t("nav.home") }}</span>
        <span class="application_pointer px-4" @click="goToAbout">{{
          $t("nav.about")
        }}</span>
        <span class="application_pointer" @click="goToProducts">{{
          $t("nav.products")
        }}</span>
        <span class="application_pointer px-4" @click="goToContact">{{
          $t("nav.contact")
        }}</span>
      </div>
      <themeSwitcher class="px-2" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import themeSwitcher from "@/components/themeSwitcher";
import { applicationTheme } from "@/services/applicationTheme";
import { useRouter } from "vue-router";

const router = useRouter();
const theme = applicationTheme();

const goToHome = () => {
  return router.push('/home')
}

const goToAbout = () => {
  return router.push('/about')
}

const goToProducts = () => {
  return router.push('/products')
}

const goToContact = () => {
  return router.push('/contact')
}

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.desktop-nav {
  width: 100%;
  display: flex;
  direction: ltr;
  .logo-container {
    width: 100px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 70px;
    }
  }
  .items-container {
    width: 95%;
    height: 90px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
