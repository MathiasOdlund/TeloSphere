<template>
  <layout>
    <home-hero-slider />

    <trending-products />
    <shop-banner />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeroSlider from "~~/components/hero-banner/HomeHeroSlider.vue";
import Layout from "~~/layout/Layout.vue";

import TrendingProducts from "~~/components/products/TrendingProducts.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";

export default defineComponent({
  components: {
    Layout,
    HomeHeroSlider,

    TrendingProducts,
    ShopBanner,
  },
  setup() {
    useHead({
      title: "TeloSphere - Home",
    });
  },
});
</script>
