<template>
  <v-app>
    <v-app-bar app color="grey" light>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Home Page</v-toolbar-title>
    </v-app-bar>

    <v-sheet>
      <v-container>
        <img alt="Vue logo" src="./assets/logo.png">
        <HomePage msg="Welcome to butler1970.com!"/>
      </v-container>
    </v-sheet>

    <v-footer color="grey" app>
      <span>© 2023 butler1970.com</span>
    </v-footer>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
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
</style>
