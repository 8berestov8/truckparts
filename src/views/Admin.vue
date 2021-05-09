<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer">
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        CONTENT
      </v-container>
    </v-main>

    <v-footer app class="footer">
      <h3>© 2021 TruckParts. All rights reserved.</h3>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    drawer: true
  }),
  components: {},
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>