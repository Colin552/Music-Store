<template>
  <v-card
    class="product-card"
    to="/product"
    v-bind:class="{ [`elevation-${hover}`]: true }"
    @mouseover="mouseOver()"
    @mouseleave="mouseLeave()"
  >
    <div class="product-img">
      <v-img
        height="200px"
        src="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0114910342_gtr_frt_001_rr.jpg"
        contain
      ></v-img>
    </div>
    <v-card-title primary-title>
      <div>
        <p>{{this.brand}} {{this.name}} in {{this.finish}}</p>
        <p>${{this.price}}</p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Stratocaster"
    },
    brand: {
      type: String,
      default: "Fender"
    },
    price: {
      type: Number,
      default: 1499.99
    },
    finish: {
      type: String,
      default: "Natural"
    }
  },

  data: function() {
    return {
      hover: 0
    };
  },

  methods: {
    mouseOver() {
      this.hover = 6
    },
    mouseLeave() {
      this.hover = 0
    }
  }
};
</script>

<style scoped>
.product-card {
  padding-top: 1em;
}

.product-img {
  height: 200px;
  overflow: hidden;
}
</style>
