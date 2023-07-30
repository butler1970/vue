<template>
  <h1>${PAGE}</h1>

  <p>Welcome to the ${PAGE} page.</p>

  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="6"><v-sheet color="primary" class="pa-2 ma-2">col1</v-sheet></v-col>
      <v-col cols="12" md="6"><v-sheet color="secondary" class="pa-2 ma-2">col2</v-sheet></v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: '${PAGE}Page',
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

