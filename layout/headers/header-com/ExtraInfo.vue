<template>
  <ul class="extra-info">
    <li>
      <div class="my-account">
        <div class="extra-title">
          <h5>My Account</h5>
        </div>
        <ul>
          <li><nuxt-link href="/wishlist">Wishlist</nuxt-link></li>
          <li><nuxt-link href="/cart">Cart</nuxt-link></li>
          <li><nuxt-link href="/checkout">Checkout</nuxt-link></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="lang">
        <div class="extra-title">
          <h5>Language</h5>
        </div>
        <ul>
          <li><a href="#">English</a></li>
          <li><a href="#">Norwegian</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="currency">
        <div class="extra-title">
          <h5>currency</h5>
        </div>
        <ul>
          <li><a href="#">USD - US Dollar</a></li>
          <li><a href="#">NOK - Norwegian Krone</a></li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
