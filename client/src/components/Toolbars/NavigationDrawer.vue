<template>
  <v-navigation-drawer v-model="drawerState" absolute temporary>
    <i @click.stop="changeDrawerState" class="material-icons icon-class">close</i>
    <v-list>

      <v-divider></v-divider>

      <v-list-group :value="false">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>User</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-tile>
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Account</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Cart</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-divider></v-divider>

      <v-list-group :value="false">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Shop</v-list-tile-title>
          </v-list-tile>
        </template>


          <v-list-tile to="/electric-guitars">
            <v-list-tile-title>Electric Guitars</v-list-tile-title>
          </v-list-tile>

        <v-divider></v-divider>

          <v-list-tile to="/acoustic-guitars">
            <v-list-tile-title>Acoustic Guitars</v-list-tile-title>
          </v-list-tile>

        <v-divider></v-divider>

          <v-list-tile to="/amplifiers">
            <v-list-tile-title>Amplifiers</v-list-tile-title>
          </v-list-tile>

        <v-divider></v-divider>

          <v-list-tile to="/tools">
            <v-list-tile-title>Tools and Parts</v-list-tile-title>
          </v-list-tile>

      </v-list-group>

      <v-divider></v-divider>


        <v-list-tile to="/about">
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>


        <v-list-tile to="/contact">
          <v-list-tile-title>Contact</v-list-tile-title>
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
