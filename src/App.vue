<template>
  <v-app>
    <v-app-bar color="primary" class="flex-grow-0" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Online Tools</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Online Tools</v-list-item-title>
          <v-list-item-subtitle>Select the desired online tool</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div class="content">
      <router-view/>
    </div>

    <v-footer color="grey" app>
      <span>© 2023 butler1970.com</span>
    </v-footer>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    items: [
      {title: 'Home', icon: 'mdi-view-dashboard', route: '/'},
      {title: 'MyIP', icon: 'mdi-tools', route: '/my-ip'},
      {title: 'About', icon: 'mdi-account-box', route: '/about'},
    ],
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  margin: auto;
  width: 50%;
}
</style>
