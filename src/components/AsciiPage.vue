<template>
  <h1>Ascii</h1>

  <p>Welcome to the Ascii page.  Below you will find a table which represents all of the 7-bit ascii characters from
    0 to 127.  The codes are in the order (dec, bin, oct, hex) followed by the printable character representation for
    those codes which are considered printable.  To learn more about ASCII you can visit the Wikipedia article,
    <a target="_blank" href="https://en.wikipedia.org/wiki/ASCII">ASCII</a></p>

  <v-container>
    <v-table>
      <thead>
        <tr color="primary">
          <th class="text-center">Decimal</th>
          <th class="text-center">Binary</th>
          <th class="text-center">Octal</th>
          <th class="text-center">Hex</th>
          <th class="text-center">Char</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 128" :key="n">
          <td>{{ n - 1 }}</td>
          <td>{{ (n - 1).toString(2) }}</td>
          <td>{{ (n - 1).toString(8) }}</td>
          <td>{{ (n - 1).toString(16) }}</td>
          <td>{{ toChar(n - 1) }}</td>
        </tr>
      </tbody>
    </v-table>
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

