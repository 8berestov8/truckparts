<template>
  <v-app app>
    <v-main app>
      <component :is="layouts">
        <router-view/>
      </component>
    </v-main>
  </v-app>
</template>

<script>
import AdminLayout from "./layouts/Admin";
import ClientLayout from "./layouts/Client";

export default {
  name: 'App',
  computed: {
    layouts() {
      return (this.$route.meta.layouts || 'Client') + 'Layout'
    }
  },
  components: {AdminLayout, ClientLayout}
};
</script>
