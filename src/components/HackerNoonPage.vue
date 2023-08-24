<template>
  <h1>HackerNoon</h1>

  <p>Welcome to the HackerNoon page.  As an exercise to consume an RSS feed from a site and render it using VueJS
  I have selected a site which I ran across recently that has some interesting articles on topics across a broad
  spectrum of technology niches such as crypto currency, artificial intelligence, programming, machine learning,
    gaming, etc.  If these articles are of interest to you, please visit
    <a target="_blank" href="https://hackernoon.com">HackerNoon.</a>
  </p>

  <v-container v-if="feed == null">
    <v-progress-linear indeterminate></v-progress-linear>
  </v-container>

  <v-container v-else>
    <v-container v-for="(item, index) in feed.items" :key="index">
      <v-sheet elevation="4">
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Title</v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left">{{ item.title }}</v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet color="secondary" class="pa-2 ma-2"><v-img :src="getImageUrl(item.media.thumbnail.url)" width="300"/></v-sheet>
          </v-col>
          <v-col cols="12" md="2" v-if="canShare">
            <v-sheet color="secondary" class="pa-2 ma-2"><v-btn @click="shareContent(item)">Share</v-btn></v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Author</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left">{{ item.author }}</v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Description</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left">{{ item.description }}</v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Link</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left"><a target="_blank" :href="item.link">{{ item.link }}</a></v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Categories</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left">{{ item.category.join(', ') }}</v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </v-container>

  <v-snackbar v-model="sharedToast.show" :timeout="sharedToast.timeout">
    {{ sharedToast.message }}
  </v-snackbar>

</template>

<script>
import {resolveApiUrl} from "@/util";
import {canShare} from "@/util";

const { parse } = require('rss-to-json');

export default {
  name: 'HackerNoonPage',
  data() {
    return {
      canShare: false,
      feed: null,
      sharedToast: {
        show: false,
        timeout: 2000,
        message: '',
      },
    }
  },
  created() {
    this.load();
    this.canShare = canShare();
  },
  watch: {
    // feed(newValue) {
    //   console.log(newValue);
    // }
  },
  methods: {
    async load() {
      this.feed = await parse(resolveApiUrl('feed/hackernoon'));
    },
    shareContent(input) {
      if (navigator.share !== undefined) {
        navigator.share({
          title: input.title,
          text: "Check this out!",
          url: input.link
        }).then(() => {
          this.sharedToast.message = "Shared!";
          this.sharedToast.show = true;
        }).catch(error => {
          this.sharedToast.message = error;
          this.sharedToast.show = true;
        });
      }
    },
    getImageUrl(input) {
      return input.replace(/https:\/\/hackernoon.com\//g, '');
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

