<template>
  <baseCard>
    <template #cardContent>
      <img class="mb-2" :src="image" alt="image" />
      <span class="size_v-m primary_color px-2">{{ name }}</span>
      <p class="size_s px-2">{{ category }}</p>
      <p class="size_v_s gary_color px-2">{{ $t("lorem") }}</p>
      <div class="d-flex w-100">
        <div class="d-flex w-50">
          <p class="size_s px-2 pt-1">{{ $t("price") }} :</p>
          <p class="size_s pt-1">{{ price }} $</p>
        </div>
       <div class="d-flex justify-content-end w-50">
        <baseBtn class="mx-2" color="primary" name="Add To Card" icon="card" />
       </div>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import { defineProps } from "vue";
import baseCard from "@/components/base/baseCard";
import baseBtn from "@/components/base/baseBtn";
const props = defineProps({
  image: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  category: {
    type: String,
    default: "",
    required: true,
  },
  price: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style>
img {
  width: 100%;
  height: 200px;
}
</style>
