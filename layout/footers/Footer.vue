<template>
  <section :class="`footer__area footer-bg ${box_style ? 'box-m-15' : ''}`">
    <div class="footer__top pt-100 pb-60">
      <div class="container">
        <h1>Telosphere</h1>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    box_style: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
