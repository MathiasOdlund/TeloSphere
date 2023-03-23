
<script>
import { allProductsQuery } from '~/graphql/queries'
export default {
 async data(){
  const products = await useAsyncQuery(allProductsQuery)
  return{
    products
  }
 },
  async mounted(){
    this.products = await useAsyncQuery(allProductsQuery)
  }


}
</script>
<template>
  {{ products }}
<div v-for="product in products" :key="product.id">

</div>
</template>
