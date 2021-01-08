<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-for="(item, idx) in countries" :key="idx">{{ item }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['countries'])
  },
  mounted () {
    this.getAllCountries()
  },
  methods: {
    ...mapActions(['getAllCountries'])
  }
}
</script>
