<template>
  <div class="home">
    <h1>Home</h1>

    <v-container v-if="intro === 0">
      <p>Welcome to <strong>InternetTools.app!</strong> I've constructed this site to sharpen my development skills and
        experiment with some technologies which have become popular as of late to see what all of the buzz is about.
        Specifically, I am intrigued about comprehending the manner in which <strong>Docker</strong> containers can act
        as a substitute for the typical virtual machine within a development environment to maintain developmental
        dependencies disassociated from the host device.</p>

      <p>In my journeys I've also discovered that as far as PHP frameworks go, <strong>Laravel</strong> seems to have
        the most evolved containerization experience allowing for creating a fully working LAMP stack with container
        orchestration right out of the box. Through my research into popular Laravel frontend frameworks, I've observed
        <strong>Vue.js</strong> growing rapidly in usage, making it worthwhile to supplement my Laravel knowledge with
        complementary familiarity in Vue.js and round out my full-stack skills. With my past experience developing
        various projects in <strong>React</strong> spanning several years, the ease of working with Vue.js in initial
        use has been a refreshing change so far in comparison. In particular, I find the data binding model refreshing
        in it's simplicity.</p>

      <p>Among the bounty of resources at your fingertips exists a plethora of solutions crafted to relieve you of the
        tedium often entailed when manually investigating details frequently demanded in your routine technical
        responsibilities. The menu bar located along the left side of the screen provides access to an assortment of
        helpful instruments if selected. If you find a need for other tools which are not provided here please consider
        leaving the administrator some helpful feature requests and we'll be happy to accommodate you.</p>
    </v-container>

    <v-container v-else>
      <p>Welcome to <strong>InternetTools.app</strong>! I've constructed this site to sharpen my development skills and
        experiment with some technologies which have become popular as of late to see what all of the buzz is about. In
        particular I'm interested in understanding how <strong>Docker</strong> containers can be used in place of the
        typical virtual machine in a development environment to keep development dependencies off of the host machine.
      </p>

      <p>In my journeys I've also discovered that as far as PHP frameworks go, <strong>Laravel</strong> seems to have
        the most evolved containerization experience allowing for creating a fully working LAMP stack with container
        orchestration right out of the box. I've also noticed that the <strong>Vue.js</strong> framework seems to be a
        popular solution for a <strong>Laravel</strong> frontend so I'm also getting familiar with
        <strong>Vue.js</strong> to complete the experience. Having several years of experience using
        <strong>React</strong> in various projects I feel that <strong>Vue.js</strong> is a much easier framework to
        work with so far. In particular, I find the data binding model refreshing in it's simplicity.</p>

      <p>Here you will find a number of tools to help you with your IT tasks to save you the trouble of having to write
        shell scripts to get at information that is commonly needed in your everyday IT life. Please, use the menu bar
        on your left to access these tools. If you find a need for other tools which are not provided here please
        consider leaving the administrator some helpful feature requests and we'll be happy to accommodate you.</p>
    </v-container>
  </div>

  <v-divider/>

  <v-container v-if="this.quoteOfTheDay != null">
    <v-row>
      <v-col col="12">
        <v-sheet v-html="quoteOfTheDay[0].h" class="pa-2 ma-2 text-h3"></v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-divider/>

  <FeedReader feedDomain="butler1970.com"></FeedReader>
</template>

<script>
import {resolveApiUrl} from "@/util";
import {getRandomValue} from "@/util";

const axios = require('axios');

export default {
  name: 'HomePage',
  data() {
    return {
      intro: getRandomValue(2),
      quoteOfTheDay: null,
    }
  },
  created() {
    this.loadQuoteOfTheDay();
  },
  methods: {
    loadQuoteOfTheDay() {
      axios.get(resolveApiUrl('proxy/zenquote/random'))
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

