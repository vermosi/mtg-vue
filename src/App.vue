<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">

        <h1>MTG<span class="font-weight-light">VUE</span></h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="#"
      >
        <span class="mr-2">Random</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Search/>
      <component :is="currentComponent" v-on:click-card="goToDetail" :currentComponent="currentComponent" :cardText="cardText" :cardImage="cardImage" :cardTitle="cardTitle">
      </component>
    </v-content>
    <v-footer fixed>
      <v-spacer></v-spacer>
      <div>Made with &hearts; by Vermosi in Nashville, TN - &copy; {{ new Date().getFullYear() }}</div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Search from './components/Search'
import Detail from './components/Detail'
import Result from './components/Result'
export default {
  name: 'App',
  components: {
    Search,
    Detail,
    Result
  },
  data () {
    return {
      currentComponent: "Result",
      cardText: '',
      cardImage: '',
      cardTitle: '',
      cardResults: []
      // //THIS IS ALREADY STRINGIFIED
      // var string = '{"items":[{"Desc":"Item1"},{"Desc":"Item2"}]}';

      // // DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
      // localStorage.setItem('added-items', string);

      // // READ STRING FROM LOCAL STORAGE
      // var retrievedObject = localStorage.getItem('added-items');

      // // CONVERT STRING TO REGULAR JS OBJECT
      // var parsedObject = JSON.parse(retrievedObject);

      // // ACCESS DATA
      // console.log(parsedObject.items[0].Desc);
    }
  },
  methods: {
    goToDetail(name) {
      this.currentComponent = "Detail";
    }
  }
};
</script>
