<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 d-flex justify-content-center">
        <img src="@/assets/images/men-image.jpg" alt="image" />
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-center px-3">
        <span class="primary_color size_m">{{ $t("headertitle") }}</span>
        <p class="size_s">{{ $t("lorem") }}</p>
       <div>
        <baseBtn name="Get Started" color="light" icon="card" @click="goToProducts" />
       </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import baseBtn from "@/components/base/baseBtn";
import { useRouter } from "vue-router";

const router = useRouter();

const goToProducts = () => {
  return router.push("/products");
};
</script>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 50px 0;
}
</style>
