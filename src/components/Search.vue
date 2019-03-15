<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
      <v-form v-on:submit.prevent="searchData">
        <v-text-field
          class="md5"
          v-model="search"
          :hint="'Try searching for \'Birds of Paradise\'.'"
          :label="`Search`"
          append-icon="search"
          @click:append="searchData"
          @submit="searchData"
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
    props: ['currentComponent'],
    data() {
      return {
        loading: false,
        post: null,
        error: null,
        search: ""
      }
    },
    methods: {
      searchData() {
        this.error = this.post = null
        this.loading = true
        let searchTerm = this.search
        fetch(url + searchTerm)
          .then(res => res.json())
          .then(response => {
            localStorage.setItem('mtgdata', JSON.stringify(response))
            //TODO: Find if 1 or more cards
            // If 1 card (object), go to detail
            // otherwise (array), go to result
          })
          .catch(error => console.error('Error:',error))
      },
      checkLocalStorage(){
        if (localStorage.getItem('mtgdata') !== null) {
          searchData()
        } else {
          console.error('Error:',error)
        }
      }
    }
  };
</script>