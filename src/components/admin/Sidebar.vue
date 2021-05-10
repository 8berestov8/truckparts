<template>
  <v-list>
    <v-list-item-group>
      <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        style="text-decoration: none"
      >
        <v-list-item class="menu">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    links: [
      {
        title: 'Магазин',
        icon: 'mdi-shopping',
        url: '/admin'
      },
      {
        title: 'Система',
        icon: 'mdi-wrench',
        url: '/systems'
      },
      {
        title: 'Содержимое',
        icon: 'mdi-note-multiple',
        url: '/contents'
      },
      {
        title: 'Пользователи',
        icon: 'mdi-account-multiple',
        url: '/users'
      },
    ]
  }),
  computed: {},
  methods: {}
}
</script>

<style scoped>
menu {
  text-decoration: none;
}
</style>