<template>
  <div class="category-sidebar">
    <v-expansion-panel
      v-model="panel"
      expand
      v-bind:class="{ [`elevation-${hover}`]: true }"

    >
      <v-expansion-panel-content>
        <div slot="header">
          <h3>Subcategories</h3>
        </div>
        <v-list class="sidebar-list">
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">Solid body</v-subheader>
          </v-list-tile>
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">Semi hollow body</v-subheader>
          </v-list-tile>
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">Baritone</v-subheader>
          </v-list-tile>
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">6 String</v-subheader>
          </v-list-tile>
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">7 String</v-subheader>
          </v-list-tile>
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">8 String</v-subheader>
          </v-list-tile>
          <v-list-tile to="/electric-guitars" class="sidebar-link-tile" ripple>
            <v-subheader class="pl-0">Guitar Packs</v-subheader>
          </v-list-tile>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [true],
      hover: 0
    };
  },
  methods: {
    mouseOver() {
      this.hover = 6;
    },
    mouseLeave() {
      this.hover = 0;
    }
  }
};
</script>

<style scoped>
.sidebar-list {
  padding-top: 0;
}
.category-sidebar {
  background: white;
  width: 250px;
}

.sidebar-link-tile {
  height: 40px;
  text-decoration: none;
}
</style>
