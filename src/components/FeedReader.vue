<template>
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
          <v-col cols="12" md="6">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left" v-html="item.title"></v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet color="secondary" class="pa-2 ma-2">
              <v-img :src="getImageUrl(item)" width="300"/>
            </v-sheet>
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
<!--            <v-sheet color="secondary" class="pa-2 ma-2 text-left">{{ item.description }}</v-sheet>-->
            <v-sheet color="secondary" class="pa-2 ma-2 text-left" v-html="item.description"></v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Link</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left"><a target="_blank" :href="item.link">{{
                item.link
              }}</a></v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Share</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 float-left">
              <v-btn @click="shareOnFacebook(item)"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn @click="shareOnTwitter(item)"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn @click="shareWithWebApi(item)" v-if="canShare"><v-icon>mdi-share</v-icon></v-btn>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet color="primary" class="pa-2 ma-2">Categories</v-sheet>
          </v-col>
          <v-col cols="12" md="10">
            <v-sheet color="secondary" class="pa-2 ma-2 text-left">{{ getCategories(item) }}</v-sheet>
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

const {parse} = require('rss-to-json');

export default {
  props: ['feedDomain'],
  setup(props) {
  },
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
    this.canShare = navigator.share !== undefined;
  },
  watch: {
    // feed(newValue) {
    //   console.log(newValue);
    // }
  },
  methods: {
    load() {
      const feedUrl = resolveApiUrl(`feed/by-domain`);

      const config = {
        method: 'post',
        data: {
          domain: this.feedDomain
        }
      };

      parse(feedUrl, config)
          .then(response => {
            this.feed = response;
          })
          .catch(error => {
            console.log(error);
          });
    },
    getImageUrl(input) {
      console.log("getImageUrl(): input = ", input);
      if (input.media.thumbnail && input.media.thumbnail.url) {
        const url = input.media.thumbnail.url;

        if (url.match(/https:\/\/hackernoon.com\//g)) {
          return input.media.thumbnail.url.replace(/https:\/\/hackernoon.com\//g, '');
        }

        return url;
      }

      return "/news-97862.svg";
    },
    getCategories(input) {
      if (input.category.join !== undefined) {
        return input.category.join(', ');
      }

      return "";
    },
    shareWithWebApi(input) {
      navigator.share({
        title: input.title,
        text: 'Check it out!',
        url: input.link,
      })
          .then(() => {
            this.sharedToast.message = "Shared!";
            this.sharedToast.show = true;
          })
          .catch(error => {
            this.sharedToast.message = error;
            this.sharedToast.show = true;
          });
    },
    shareOnFacebook(input) {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(input.link)}`, '_blank');
    },
    shareOnTwitter(input) {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(input.link)}&text=${encodeURIComponent('Check this out!')}`, '_blank');
    }
  }
}
</script>
