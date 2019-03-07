<template>
  <div class="filter-sidebar">
    <v-expansion-panel v-model="panel" expand v-bind:class="{ [`elevation-${0}`]: true }">
      <v-expansion-panel-content>
        <div slot="header">
          <h3>Filter</h3>
        </div>
        <div class="price-slider">
          <v-subheader class="pl-0">By Price</v-subheader>

          <div class="price-text-wrapper">
            <v-text-field
              v-model="price[0]"
              class="slider-text-left"
              hide-details
              single-line
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="price[1]"
              class="slider-text-right"
              hide-details
              single-line
              type="number"
            ></v-text-field>
          </div>

          <v-range-slider v-model="price" :max="3000" :min="0"></v-range-slider>
        </div>

        <v-list-tile>
          <v-subheader class="pl-0">By Brand</v-subheader>
        </v-list-tile>
        <v-list-tile>
          <v-checkbox  :label="'Fender'"></v-checkbox>
        </v-list-tile>
        <v-list-tile>
          <v-checkbox  :label="'Gibson'"></v-checkbox>
        </v-list-tile>
        <v-list-tile>
          <v-checkbox  :label="'Ibanez'"></v-checkbox>
        </v-list-tile>
        <v-list-tile>
          <v-checkbox :label="'Squier'"></v-checkbox>
        </v-list-tile>
        <v-list-tile>
          <v-checkbox :label="'Epiphone'"></v-checkbox>
        </v-list-tile>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [true],
      price: [0, 3000]
    };
  }
};
</script>

<style scoped>
.filter-sidebar {
  padding-top: 1em;
  width: 250px;
}

.price-slider {
  margin: 0px 15px 0px 15px;
}
.price-text-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.slider-text-right {
  margin-left: 5px;
}
.slider-text-left {
  margin-right: 5px;
}
</style>
