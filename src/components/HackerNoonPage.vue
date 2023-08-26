<template>
  <h1>HackerNoon</h1>

  <p>Welcome to the HackerNoon page. As an exercise to consume an RSS feed from a site and render it using VueJS
    I have selected a site which I ran across recently that has some interesting articles on topics across a broad
    spectrum of technology niches such as crypto currency, artificial intelligence, programming, machine learning,
    gaming, etc. If these articles are of interest to you, please visit
    <a target="_blank" href="https://hackernoon.com">HackerNoon.</a>
  </p>

  <v-divider/>

  <FeedReader feedDomain="hackernoon.com"></FeedReader>
</template>

<script>
export default {
  name: 'HackerNoonPage',
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

