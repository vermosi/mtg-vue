<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-form v-on:submit.prevent="updateValue($event.target.value)">
          <v-text-field
          class="md5"
          v-model="search"
          :hint="'Try searching for \'Birds of Paradise\'.'"
          :label="`Search`"
          append-icon="search"
          @click:append="updateValue($event.target.value)"
          @submit="updateValue($event.target.value)"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const url = 'https://api.scryfall.com/cards/named?fuzzy=';
export default {
  name: 'Search',
  props: ['currentComponent', 'cardResults', 'value'],
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      search: "",
      cards: []
    }
  },
  computed: {
    swapComponent: function(component) {
      this.currentComponent = component
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  }
}
</script>