<template>
  <h1>MyIP</h1>

  <p>Welcome to the MyIP page.  Below you should find your external ip address as reported by the service
    <a target="_blank" href="https://ipify.org">ipify API</a>.  For your convenience, you may click on the ip address
    of your choice to copy the value to your browser's clip board.  For more information on IPv4 you can refer
  to the Wikipedia article
    <a target="_blank" href="https://en.wikipedia.org/wiki/Internet_Protocol_version_4">IPv4</a>.
  For more information on IPv6 you can refer to the Wikipedia article <a target="_blank" href="https://en.wikipedia.org/wiki/IPv6">IPv6</a>.
  </p>

  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-sheet color="primary" class="pa-2 ma-2">
          ipify ipv4
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-btn @click="copy(ipify_ipv4)">{{ this.ipify_ipv4 }}</v-btn>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-sheet color="primary" class="pa-2 ma-2">
          ipify ipv4 or ipv6
        </v-sheet>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-btn @click="copy(ipify_ipv6)">{{ this.ipify_ipv6 }}</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
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
    },
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

