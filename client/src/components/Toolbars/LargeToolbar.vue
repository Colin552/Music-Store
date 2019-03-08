<template>
  <div>
    <v-toolbar color="white" flat>
      <v-layout fill-height justify-space-between>
        <v-flex shrink></v-flex>
        <v-flex class="main-flex" grow>
          <v-layout fill-height>
            <v-flex align-self-center>
              <div class="upper-nav-brand">
                <router-link to="/">
                  <h1>The Music Store</h1>
                </router-link>
              </div>
            </v-flex>
            <v-flex grow></v-flex>
            <v-flex shrink>
              <div class="upper-nav-items">
                <v-btn flat class="nav-buttons">
                  <h3>Login</h3>
                </v-btn>
                <v-btn flat class="nav-buttons">
                  <v-icon x-large>account_circle</v-icon>
                </v-btn>
                <v-btn flat class="nav-buttons">
                  <v-icon x-large>shopping_cart</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex shrink></v-flex>
      </v-layout>
    </v-toolbar>

    <v-toolbar color="#64afff" dense flat>
      <v-layout fill-height justify-space-between>
        <v-flex shrink></v-flex>
        <v-flex class="main-flex" grow>
          <div class="lower-nav-items">
            <v-menu offset-y class="nav-buttons" open-on-hover>
              <v-btn slot="activator" dark flat class="nav-buttons">
                <h3>Shop</h3>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
              <v-list>

                  <v-list-tile class="nav-tile" to="/electric-guitars">
                    <v-list-tile-title>Electric Guitars</v-list-tile-title>
                  </v-list-tile>

                <v-divider></v-divider>

                  <v-list-tile class="nav-tile" to="/acoustic-guitars">
                    <v-list-tile-title>Acoustic Guitars</v-list-tile-title>
                  </v-list-tile>

                <v-divider></v-divider>

                  <v-list-tile class="nav-tile" to="/amplifiers">
                    <v-list-tile-title>Amplifiers</v-list-tile-title>
                  </v-list-tile>

                <v-divider></v-divider>

                  <v-list-tile class="nav-tile" to="/tools">
                    <v-list-tile-title>Tools and Parts</v-list-tile-title>
                  </v-list-tile>

              </v-list>
            </v-menu>

            <v-btn flat dark to="/about" class="nav-buttons">
              <h3>About</h3>
            </v-btn>

            <v-btn flat dark to="/contact" class="nav-buttons">
              <h3>Contact</h3>
            </v-btn>
          </div>
        </v-flex>
        <v-flex shrink></v-flex>
      </v-layout>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style >
.main-flex {
  height: 100%;
  max-width: 1100px;
}
.v-toolbar__content {
  padding: 0;
}

.upper-nav-items {
  height: 100%;
  align-content: flex-end;
}

.nav-buttons {
  height: 100%;
  margin: 0;
  padding: 0;
}

.upper-nav-brand {
  text-align: middle;
  margin-left: 10px;
}

.lower-nav-items {
  height: 100%;
}

.v-menu__activator {
  height: 100%;
}
</style>
