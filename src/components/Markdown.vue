<template>
  <v-container v-html="html"></v-container>
</template>

<script>
import MarkdownIt from "markdown-it";
import MarkdownItAttrs from "markdown-it-attrs";

export default {
  props: ['source'],
  setup(props) {
  },
  data() {
    return {
      html: null,
    }
  },
  created() {
    const md = new MarkdownIt().use(MarkdownItAttrs);
    this.html = md.render(this.source);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.markdown {
  color: red;
}
</style>

