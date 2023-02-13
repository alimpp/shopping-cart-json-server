<template>
  <div class="index">
    <applicationHeader />
    <div class="container">
      <baseDivider class="mt-5" :text="$t('newproducts')" width="120px" />
      <div class="row mt-4">
        <div class="col-lg-3" v-for="data in dataSource" :key="data.id">
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

<style lang="scss" scoped></style>
