<template>
  <div>
    <div v-if="$mq === 'large' || $mq === 'medium'">
      <SubCategories/>
      <Filters/>
    </div>
    <div v-else>
      <v-btn class="filter-button" color="white" v-bind:class="{ [`elevation-${0}`]: true }" >
        <i class="material-icons">filter_list</i> Filters
      </v-btn>
    </div>
  </div>
</template>

<script>
import Filters from "./Filters.vue";
import SubCategories from "./SubCategories.vue";

export default {
  components: {
    Filters,
    SubCategories
  }
};
</script>

<style>
.filter-button {
  margin: 1em;
}
</style>
