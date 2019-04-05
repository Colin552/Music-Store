<template>
  <div>
    <ProductCard v-for="_product in products" v-bind:key="_product._id" :product="_product"/>
  </div>
</template>

<script>
/* eslint-disable */
import ProductCard from "../../components/ProductCard.vue";
import ProductsService from "@/services/ProductsService.js";
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: null
    };
  },
  mounted() {
    this.getProducts();
    this.test();
  },
  methods: {
    async getProducts() {
      const response = await ProductsService.fetchProducts();
      this.products = response.data;
    },
    async test() {
      /*
      console.log(this.$route.path);
      const response = await ProductsService.fetchProductsByCategory(
        "5ca4d69c2f8560131c3c62ec"
        
      );
      */
    }
  }
};
</script>

<style>
</style>
