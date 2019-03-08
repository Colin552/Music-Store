<template>
  <div>
    <v-toolbar color="#64afff" dark flat>
      <div class="toolbar-side-icon">
        <v-toolbar-side-icon @click.stop="changeDrawerState"></v-toolbar-side-icon>
      </div>



      <v-toolbar-title>The Music Store</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="upper-nav-items">
        <v-btn flat class="nav-buttons">
          <v-icon x-large>shopping_cart</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
  </div>
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
      }else {
        this.drawerState = true;
      }
    }
  }
};
</script>

<style>
</style>
