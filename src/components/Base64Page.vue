<template>
  <h1>Base64</h1>

  <p>Welcome to the Base64 page.  Below you will find helpers to base64 encode and decode a value.  The helpers use
  the javascript functions <b>atob</b> and <b>btoa</b>.  For more information about these functions you can refer
  to the following MDN documentation,
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/Base64">Javascript Base64</a>.
    For more information on the purpose of Base64, you can refer to the Wikipedia article,
    <a target="_blank" href="https://en.wikipedia.org/wiki/Base64">Base64</a>
  </p>

  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="primary" class="pa-2 ma-2">
          Base64 Encode
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-text-field label="Value" v-model="base64Encode.input" clearable clear-icon="mdi-close-circle"></v-text-field>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="2">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-btn @click="encode(base64Encode.input)">Encode</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-textarea label="Click to copy" v-model="base64Encode.result" readonly @click="copy(base64Encode.result)"></v-textarea>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>


  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="primary" class="pa-2 ma-2">
          Base64 Decode
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-textarea label="Value" v-model="base64Decode.input" clearable clear-icon="mdi-close-circle"></v-textarea>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="2">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-btn @click="decode(base64Decode.input)">Decode</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-text-field label="Click to copy" v-model="base64Decode.result" readonly @click="copy(base64Decode.result)"></v-text-field>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { Clipboard } from 'v-clipboard';

export default {
  name: 'Base64Page',
  data() {
    return {
      base64Encode: {
        input: null,
        result: null,
      },
      base64Decode: {
        input: null,
        result: null,
      },
    }
  },
  methods: {
    encode(input) {
      this.base64Encode.result = btoa(input);
    },
    decode(input) {
      this.base64Decode.result = atob(input);
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

