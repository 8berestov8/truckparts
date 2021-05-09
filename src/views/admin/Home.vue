<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer">
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title>Панель управления</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-container fluid>
        CONTENT
      </v-container>
    </v-main>

    <v-footer app class="footer">
      <v-footer-title>© 2021 TruckParts. All rights reserved.</v-footer-title>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    drawer: true
  }),
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>