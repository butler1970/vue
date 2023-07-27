<template>
  <div class="myip">
    <h1>My IP Page</h1>
    <p>According to ipify.org my ip address is <b>{{ this.ip_address_according_to_ipify }}</b>.</p>
    <p>According to internettools.app, my ip address is <b>{{ this.ip_address_according_to_api }}</b>.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyIPPage',
  data() {
    return {
      ip_address_according_to_ipify: null,
      ip_address_according_to_api: null
    }
  },
  created() {
    this.getIpAddress()
  },
  methods: {
    getIpAddress() {
      const ipifyUrl = "https://api.ipify.org?format=json"
      axios.get(ipifyUrl)
          .then(response => {
            this.ip_address_according_to_ipify = response.data.ip;
          });

      const apiUrl = `${process.env.VUE_APP_API_HOST}/api/get_ip_address?XDEBUG_SESSION_START=LARAVEL_SAIL`
      axios.get(apiUrl)
          .then(response => {
            this.ip_address_according_to_api = response.data;
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 40px;
  margin-bottom: 40px;
}

h2 {
  text-align: left;
  margin-top: 10px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

li {
  text-align: left;
}

p {
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 10px;
}
</style>

