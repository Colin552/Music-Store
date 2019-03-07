<template>
  <v-navigation-drawer v-model="drawerState" absolute temporary>
    <i @click.stop="changeDrawerState" class="material-icons icon-class">close</i>
    <v-list>
      <v-list-tile>
        <v-list-tile-title>Shop</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Shop</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Shop</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Shop</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Shop</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>Shop</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawerState: {
      get: function() {
        return this.$store.state.drawer;
      },
      set: function(value) {
        this.$store.commit("toggleDrawer", value);
      }
    }
  },
  methods: {
    changeDrawerState: function() {
      if (this.drawerState) {
        this.drawerState = false;
      } else {
        this.drawerState = true;
      }
    }
  }
};
</script>

<style scoped>
.icon-class {
  margin: 10px 0 0 10px;
}
</style>
