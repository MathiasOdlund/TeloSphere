<script>
export default {
  data() {
    return {
      products: [
        {
          title: "Enkel",
          description: "Enkel",
          image:
            "https://www.online.no/static_resources/img/mitt-telenor-768x450px_tcm48-319598.jpg",
          price: 100,
          link: "https://www.online.no/",
        },
        {
          title: "Enkel",
          description: "Enkel",
          image:
            "https://www.online.no/static_resources/img/mitt-telenor-768x450px_tcm48-319598.jpg",
          price: 100,
          link: "https://www.online.no/",
        },
        {
          title: "Enkel",
          description: "Enkel",
          image:
            "https://www.online.no/static_resources/img/mitt-telenor-768x450px_tcm48-319598.jpg",
          price: 100,
          link: "https://www.online.no/",
        },
        {
          title: "Enkel",
          description: "Enkel",
          image:
            "https://www.online.no/static_resources/img/mitt-telenor-768x450px_tcm48-319598.jpg",
          price: 100,
          link: "https://www.online.no/",
        },
      ],
    };
  },
};
</script>
<template>
  <GreeterComponent />
  <section>
    <div class="rounded-md bg-base-300 mt-10 mb-5 w-[95%] p-4 m-auto">
      <ul>
        <li>Filter</li>
      </ul>
    </div>
  </section>
  <section
    class="flex p-2 flex-row flex-warp gap-4 justify-around items-center w-full h-auto"
  >
    <ProductCard
      :title="product.title"
      :link="product.link"
      v-for="product in products"
      :price="product.price"
      :description="product.description"
      :image="product.image"
    />
  </section>
</template>
