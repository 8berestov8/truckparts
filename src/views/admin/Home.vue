<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Truckparts
          </v-list-item-title>
          <v-list-item-subtitle>
            интернет магазин запчастей
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>cdsfdf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Система</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>cdsfdf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Магазин</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>cdsfdf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Содержимое</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>cdsfdf</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Пользователи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
      <v-col
        class="text-center"
        cols="12"
      >
        <strong> © {{ new Date().getFullYear() }} — TruckParts. All rights reserved.</strong>
      </v-col>
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