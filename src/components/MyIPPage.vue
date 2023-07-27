<template>
  <h1>MyIP</h1>

  <p>Welcome to the MyIP page.  Below you should find your external ip address as reported by the service
    <a target="_blank" href="https://ipify.org">ipify API</a>.  For your convenience, you may click on the ip address
    of your choice to copy the value to your browser's clip board.</p>

  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex><v-card color="primary"><v-card-text>ipify ipv4</v-card-text></v-card></v-flex>
      <v-flex><v-card color="secondary"><v-card-text><v-btn @click="copy(ipify_ipv4)">{{ this.ipify_ipv4 }}</v-btn></v-card-text></v-card></v-flex>
    </v-layout>
  </v-container>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height>
      <v-flex><v-card color="primary"><v-card-text>ipify ipv4/6</v-card-text></v-card></v-flex>
      <v-flex><v-card color="secondary"><v-card-text><v-btn @click="copy(ipify_ipv6)">{{ this.ipify_ipv6 }}</v-btn></v-card-text></v-card></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { Clipboard } from 'v-clipboard';

export default {
  name: 'MyIPPage',
  data() {
    return {
      ipify_ipv4: null,
      ipify_ipv6: null,
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
    },
    copy(e) {
      Clipboard.copy(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 10px;
}
</style>

