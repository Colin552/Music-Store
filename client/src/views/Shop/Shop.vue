<template>
  <div>
    <div class="shop-wrapper" :class="$mq">
      <div class="sidebars">
        <ShopSidebars/>
      </div>
      <div class="product-wrapper" :class="$mq">
        <div v-if="this.shopSelection === 'electric-guitars'">
          <ElectricGuitars/>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ShopSidebars from "../../components/Sidebars/ShopSidebars.vue";
import ElectricGuitars from "./ElectricGuitars.vue";

export default {
  components: {
    ShopSidebars,
    ElectricGuitars
  },
  props: {
    shopSelection: String
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {

    }
  }

};
</script>

<style>
.shop-wrapper {
  margin-top: 1em;
  display: grid;
}

.shop-wrapper.large {
  grid-template-columns: fit-content(250px) auto;
}
.shop-wrapper.medium {
  grid-template-columns: fit-content(250px) auto;
}

.sidebars {
  grid-column: 1;
}

.product-wrapper {
  display: grid;
  margin-left: 1em;
  /*grid-template-columns: 1fr 1fr 1fr;*/
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
}

.product-wrapper.large {
  grid-template-columns: 1fr 1fr 1fr;
}

.product-wrapper.medium {
  grid-template-columns: 1fr 1fr 1fr;
  margin-right: 1em;
}

.product-wrapper.mediumSmall {
  grid-template-columns: 1fr 1fr;
  margin-right: 1em;
}

.product-wrapper.small {
  grid-template-columns: 1fr;
  margin-right: 1em;
}
</style>
