<template>
  <div>
    <div class="shop-wrapper">
      <div class="sidebars">
        <CategorySidebar/>
        <FilterSidebar/>
      </div>
      <div class="product-wrapper">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
      </div>
    </div>
  </div>
</template>

<script>
import CategorySidebar from '../../components/Sidebars/SubCategories.vue'
import FilterSidebar from '../../components/Sidebars/Filters.vue'
import ProductCard from '../../components/ProductCard.vue'
export default {
  components:{
    CategorySidebar,
    FilterSidebar,
    ProductCard
  }
};
</script>

<style>
.shop-wrapper {
  margin-top: 1em;
  display: grid;
  grid-template-columns: 250px auto;
}

.product-wrapper {
  display: grid;
  margin-left: 1em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
}
</style>
