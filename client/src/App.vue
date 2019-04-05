<template>
  <v-app>
    <Toolbar/>
    <NavigationDrawer/>
    
    <router-view name="NoGridBefore"></router-view>

    <div class="content-wrapper">
      <router-view class="content"></router-view>
    </div>

    <router-view name="NoGridAfter"></router-view>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbars/Toolbar.vue";
import NavigationDrawer from "./components/Toolbars/NavigationDrawer.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    NavigationDrawer
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
@media only screen and (min-width: 1100px) {
  .content-wrapper {
    display: grid;
    grid-template-columns: auto 1100px auto;
  }

  .content {
    grid-column: 2;
  }
}
</style>
