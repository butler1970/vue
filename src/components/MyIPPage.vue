<template>
  <h1>MyIP</h1>
  <p>Welcome to the MyIP page.  Below you should find your external ip address as reported by the service <a target="_blank" href="https://ipify.org">ipify API</a>.</p>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6><v-card color="primary"><v-card-text class="px-lg-16">ipify ipv4</v-card-text></v-card></v-flex>
      <v-flex xs6><v-card color="secondary"><v-card-text class="px-lg-16"><b>{{ this.ipify_ipv4 }}</b></v-card-text></v-card></v-flex>
    </v-layout>
  </v-container>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6><v-card color="primary"><v-card-text class="px-lg-14">ipify ipv4/6</v-card-text></v-card></v-flex>
      <v-flex xs6><v-card color="secondary"><v-card-text class="px-lg-16"><b>{{ this.ipify_ipv6 }}</b></v-card-text></v-card></v-flex>
    </v-layout>
  </v-container>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6><v-card color="primary"><v-card-text class="px-lg-16">api ipv4</v-card-text></v-card></v-flex>
      <v-flex xs6><v-card color="secondary"><v-card-text class="px-lg-16"><b>{{ this.api_ipv4 }}</b></v-card-text></v-card></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyIPPage',
  data() {
    return {
      ipify_ipv4: null,
      ipify_ipv6: null,
      api_ipv4: null
    }
  },
  created() {
    this.getIpAddress()
  },
  methods: {
    getIpAddress() {
      axios.get("https://api.ipify.org?format=json")
          .then(response => {
            this.ipify_ipv4 = response.data.ip;
          });

      axios.get("https://api64.ipify.org?format=json")
          .then(response => {
            this.ipify_ipv6 = response.data.ip;
          });

      const apiUrl = `${process.env.VUE_APP_API_HOST}/api/get_ip_address`
      axios.get(apiUrl)
          .then(response => {
            this.api_ipv4 = response.data;
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

