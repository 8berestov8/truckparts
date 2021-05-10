<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <Sidebar/>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-title>
        <h3 style="width: 100%">Панель управления</h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
      <v-col
        class="text-center"
        cols="12"
      >
        © {{ new Date().getFullYear() }} — TruckParts. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>


import Sidebar from "../components/admin/Sidebar";

export default {
  name: "Admin",
  components: {Sidebar},
  data: () => ({
    drawer: true,
    title: process.env.VUE_APP_TITLE,
    subtitle: process.env.VUE_APP_SUBTITLE,
  }),
  methods: {}
}
</script>

