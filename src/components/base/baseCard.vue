<template>
  <div
    class="base-card-container"
    :class="{
      basecard_dark_mode_theme: watchTheme === 'dark',
      basecard_light_mode_theme: watchTheme === 'light',
    }"
  >
    <slot name="cardContent"></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
const props = defineProps({
  width: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.base-card-container {
  width: 100%;
  transition: 1s;
  border-radius: 15px;
  margin: 10px 0;
  overflow: hidden;
}
</style>
