<template>
  <div class="home">
    <h1>Home</h1>

    <p>Welcome to <strong>InternetTools.app</strong>! I've constructed this site to sharpen my development skills and
      experiment with some technologies which have become popular as of late to see what all of the buzz is about. In
      particular I'm interested in understanding how <strong>Docker</strong> containers can be used in place of the
      typical virtual machine in a development environment to keep development dependencies off of the host machine.</p>

    <p>In my journeys I've also discovered that as far as PHP frameworks go, <strong>Laravel</strong> seems to have the
      most evolved containerization experience allowing for creating a fully working LAMP stack with container
      orchestration right out of the box. I've also noticed that the <strong>Vue.js</strong> framework seems to be a
      popular solution for a <strong>Laravel</strong> frontend so I'm also getting familiar with <strong>Vue.js</strong>
      to complete the experience. Having several years of experience using <strong>React</strong> in various projects I
      feel that <strong>Vue.js</strong> is a much easier framework to work with so far. In particular, I find the data
      binding model refreshing in it's simplicity.</p>

    <p>Here you will find a number of tools to help you with your IT tasks to save you the trouble of having to write
      shell scripts to get at information that is commonly needed in your everyday IT life. Please, use the menu bar on
      your left to access these tools. If you find a need for other tools which are not provided here please consider
      leaving the administrator some helpful feature requests and we'll be happy to accommodate you.</p></div>


  <v-container v-if="this.quoteOfTheDay != null">
    <v-row>
      <v-col col="12">
        <v-sheet v-html="quoteOfTheDay[0].h" class="pa-2 ma-2 text-h3"></v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios');

export default {
  name: 'HomePage',
  data() {
    return {
      quoteOfTheDay: null,
    }
  },
  created() {
    this.loadQuoteOfTheDay();
  },
  methods: {
    loadQuoteOfTheDay() {
      axios.get('https://api.internettools.app/api/proxy/zenquote/random')
          .then(response => {
            this.quoteOfTheDay = response.data
          });
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

