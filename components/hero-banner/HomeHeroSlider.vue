<template>
  <section
    :class="`slider__area ${
      style_2 ? 'slider__area-2' : ''
    } p-relative tp_hero`"
  >
    <Carousel :items-to-show="1" :wrap-around="true" class="slider-active">
      <Slide
        v-for="item in slider_data"
        :key="item.id"
        :class="`single-slider slider__height ${
          style_2 ? 'single-slider-2 slider__height-5' : ''
        } d-flex align-items-center`"
        :style="{ backgroundImage: `url(${item.bgImg})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
              <div class="slider__content">
                <h2 v-html="item.title"></h2>
                <p v-html="item.subtile"></p>
                <nuxt-link href="/shop" class="os-btn os-btn-2 hero-slider-btn">
                  Discover now
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
// external
import { HeroSliderType } from "~/types/HeroSliderDataType";
import slider_img_1 from "~/assets/img/iphone14.jpg";
import slider_img_2 from "~/assets/img/kontant.jpg";
import slider_img_3 from "~/assets/img/5g.jpg";

export default defineComponent({
  components: { Carousel, Slide, Pagination },
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const slider_data = ref<HeroSliderType[]>([
      {
        id: 1,
        bgImg: slider_img_1,
        title: "Spar 1000,- på den nye iPhone 14-serien",
        subtile:
          "Kampanjen gjelder alle nye og eksisterende Telenorkunder med privat mobilabonnement!",
      },
      {
        id: 2,
        bgImg: slider_img_2,
        title: "Telenor Kontant",
        subtile:
          "Telenor Kontant er for deg som ønsker å betale på forhånd. Kontantkort gir deg full kontroll på mobilbruken, enten til deg selv eller til barna.",
      },
      {
        id: 3,
        bgImg: slider_img_3,
        title: "Ubegrenset data",
        subtile: "Opptil 1000 Mbit/s - maksimal 5G-hastighet.",
      },
    ]);
    return { slider_data };
  },
});
</script>
