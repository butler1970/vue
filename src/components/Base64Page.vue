<template>
  <h1>Base64</h1>

  <p>Welcome to the Base64 page.</p>

  <v-sheet :elevation="12">

    <v-container class="container-with-label">
      <div class="container-label">
        <v-chip label>Base64 Encode</v-chip>
      </div>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-sheet color="secondary" class="pa-2 ma-2">
            <v-text-field label="Value" v-model="base64Encode.input"></v-text-field>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="2">
          <v-sheet color="secondary" class="pa-2 ma-2">
            <v-btn  @click="encode(base64Encode.input)">Encode</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-sheet color="secondary" class="pa-2 ma-2">
            <v-textarea label="Result" v-model="base64Encode.result"></v-textarea>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>


    <v-container class="container-with-label">
      <div class="container-label">
        <v-chip label>Base64 Decode</v-chip>
      </div>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-sheet color="secondary" class="pa-2 ma-2">
            <v-textarea label="Value" v-model="base64Decode.input"></v-textarea>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="2">
          <v-sheet color="secondary" class="pa-2 ma-2">
            <v-btn  @click="decode(base64Decode.input)">Decode</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-sheet color="secondary" class="pa-2 ma-2">
            <v-text-field label="Result" v-model="base64Decode.result"></v-text-field>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

  </v-sheet>
</template>

<script>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-label {
  text-align: left;
  margin-top: -18px;
  margin-left: -18px;
}

.container-with-label {
  border-top-width: 1px;
  border-top-style: solid;
}

p {
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 10px;
}
</style>

