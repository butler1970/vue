<template>
  <h1>Ascii</h1>

  <p>Welcome to the Ascii page.  Below you will find a table which represents all of the 7-bit ascii characters from
    0 to 127.  The codes are in the order (dec, bin, oct, hex) followed by the printable character representation for
    those codes which are considered printable.  To learn more about ASCII you can visit the Wikipedia article,
    <a target="_blank" href="https://en.wikipedia.org/wiki/ASCII">ASCII</a></p>

  <v-container>
    <v-row no-gutters>
      <v-col v-for="n in 128" :key="n" cols="12" md="1">
        <v-sheet color="primary" class="pa-2 ma-2">
          <span>{{ n  - 1 }}</span>
        </v-sheet>
        <v-sheet color="primary" class="pa-2 ma-2">
          <span>{{ (n - 1).toString(2) }}</span>
        </v-sheet>
        <v-sheet color="primary" class="pa-2 ma-2">
          <span>{{ (n - 1).toString(8) }}</span>
        </v-sheet>
        <v-sheet color="primary" class="pa-2 ma-2">
          <span>{{ (n - 1).toString(16) }}</span>
        </v-sheet>
        <v-sheet color="secondary" class="pa-2 ma-2">
          <span>{{ toChar(n - 1) }}</span>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'AsciiPage',
  methods: {
    toChar(input) {
      if (input < 8) {
        return `\\00${input.toString(8)}`;
      } else if (input < 32) {
        return `\\0${input.toString(8)}`;
      } else {
        return String.fromCharCode(input)
      }
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

