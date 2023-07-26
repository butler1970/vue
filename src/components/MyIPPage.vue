<template>
  <div class="myip">
    <h1>My IP Page</h1>
    <p>My ip address is {{ this.ip_address }}.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyIPPage',
  data() {
    return {
      ip_address: null,
    }
  },
  created() {
    this.getIpAddress()
  },
  methods: {
    getIpAddress() {
      axios.get(`${process.env.VUE_APP_API_HOST}/api/get_ip_address`)
          .then(response => {
            this.ip_address = response.data;
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

