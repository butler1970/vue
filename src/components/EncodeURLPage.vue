<template>
  <h1>EncodeURL</h1>

  <p>Welcome to the EncodeURL page.  Below you will find helpers to encode and decode a uri.  The helpers use
  the javascript functions <b>encodeURI</b> and <b>decodeURI</b>.  For more information about these functions you can refer
  to the following MDN documentation,
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI</a>.
    For more information on the purpose of url encoding, you can refer to the Wikipedia article,
    <a target="_blank" href="https://en.wikipedia.org/wiki/URL_encoding">URL encoding</a>
  </p>

  <v-divider/>

  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="primary" class="pa-2 ma-2">
          URL Encode
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="10">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-textarea label="Value" v-model="urlEncode.input" clearable clear-icon="mdi-close-circle"></v-textarea>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="2">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-btn @click="encode(urlEncode.input)">Encode</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-textarea label="Click to copy" v-model="urlEncode.result" readonly @click="copy(urlEncode.result)"></v-textarea>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>


  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="primary" class="pa-2 ma-2">
          URL Decode
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="10">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-textarea label="Value" v-model="urlDecode.input" clearable clear-icon="mdi-close-circle"></v-textarea>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="2">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-btn @click="decode(urlDecode.input)">Decode</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="secondary" class="pa-2 ma-2">
          <v-textarea label="Click to copy" v-model="urlDecode.result" readonly @click="copy(urlDecode.result)"></v-textarea>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-snackbar v-model="copiedToast.show" :timeout="copiedToast.timeout">
    Copied!
  </v-snackbar>
</template>

<script>
import { Clipboard } from 'v-clipboard';

export default {
  name: 'EncodeURLPage',
  data() {
    return {
      urlEncode: {
        input: null,
        result: null,
      },
      urlDecode: {
        input: null,
        result: null,
      },
      copiedToast: {
        show: false,
        timeout: 2000,
      },
    }
  },
  methods: {
    encode(input) {
      this.urlEncode.result = encodeURI(input);
    },
    decode(input) {
      this.urlDecode.result = decodeURI(input);
    },
    copy(e) {
      Clipboard.copy(e);
      this.copiedToast.show = true;
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

