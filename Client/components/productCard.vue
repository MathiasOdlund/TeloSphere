<template>
  <a :href="link">
    <div class="card w-64 bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <img :src="image" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    price: Number,
    link: String,
  },
};
</script>
<style></style>
