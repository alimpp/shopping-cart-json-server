<template>
  <div class="index">
    <carousel autoplayTime="3000" :slides="carouselDataSource" />
  </div>
</template>

<script setup>
import {ref , computed , onBeforeMount } from 'vue'
import carousel from "@/components/carousel";
import {AllCarouselData} from '@/api/carouselApi'
import {carouselDataStore} from '@/stores/carouselDataStore'

const carouselDataStoreModule = carouselDataStore()

const carouselDataSource = computed(() => {
  return carouselDataStoreModule.carousel
})

onBeforeMount(() => {
  AllCarouselData()
})
</script>

<style lang="scss" scoped></style>
