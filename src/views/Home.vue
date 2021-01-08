<template>
  <div class="home">
    <h1>
      Countries
      <br />of the World
    </h1>
    <div class="container">
      <ul v-for="(item, idx) in countries" :key="idx">
        <router-link
          :to="{path:'/details', query: {name: item.name, capital: item.capital, region: item.region, population: item.population, demonym: item.demonym, currencies: item.currencies, languages:item.languages  }}"
        >
          <h2>{{item.name}}</h2>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapState(["countries"])
  },
  mounted() {
    this.getAllCountries();
  },
  methods: {
    ...mapActions(["getAllCountries"])
  }
};
</script>
