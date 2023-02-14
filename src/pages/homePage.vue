<template>
  <div class="index application_animation">
    <applicationHeader />
    <div class="container">
      <baseDivider class="mt-5" :text="$t('newproducts')" width="120px" />
      <div class="row mt-4">
        <div class="col-lg-3 mobile-size-style" v-for="data in dataSource" :key="data.id">
          <newProductsCard
            :image="data.image"
            :name="data.name"
            :category="data.category"
            :price="data.price"
          />
        </div>
      </div>
    </div>
    <carousel class="mt-5 mb-5" :slides="carouselDataSource" :autoplay="3000" />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <baseDivider class="mb-5" :text="$t('nav.about')" width="90px" />
          <span class="size_s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur
            odio dolore reprehenderit cupiditate quis, ut cum deserunt atque eum similique
            aspernatur? Dicta nisi quae dolores commodi aliquam perspiciatis voluptas
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae adipisci
            aliquam labore, suscipit dignissimos placeat, corrupti impedit illo
            perspiciatis optio quisquam possimus? Sint fugit tempora deserunt, facere non
            exercitationem quo...
          </span>
        </div>
        <div class="col-lg-6 d-flex justify-content-center align-items-center">
          <img src="@/assets/images/men-about-image.jpg" alt="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import carousel from "@/components/carousel";
import { AllCarouselData } from "@/api/carouselApi";
import { carouselDataStore } from "@/stores/carouselDataStore";
import { productsDataStore } from "@/stores/productsDataStore";
import { AllProducts } from "@/api/productsApi";
import applicationHeader from "@/components/applicationHeader";
import baseDivider from "@/components/base/baseDivider";
import newProductsCard from "@/components/cards/newProductsCard";

const carouselDataStoreModule = carouselDataStore();
const productsDataStoreModule = productsDataStore();

const carouselDataSource = computed(() => {
  return carouselDataStoreModule.carousel;
});

const dataSource = computed(() => {
  return productsDataStoreModule.newProducts;
});

onBeforeMount(() => {
  AllCarouselData();
  AllProducts();
});
</script>

<style lang="scss" scoped>
img{
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
@media (max-width: 700px) {
  .mobile-size-style {
    padding: 0 50px;
  }
}
</style>
