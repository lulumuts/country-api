<template>
  <div class="details">
    <Card
      :name="name"
      :region="region"
      :capital="capital"
      :population="population"
      :currencies="currencies"
      :languages="languages"
    ></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  data () {
    return {
      name: this.$route.query.name,
      region: this.$route.query.region,
      capital: this.$route.query.capital,
      population: this.$route.query.population,
      currencies: this.$route.query.currencies,
      languages: this.$route.query.languages
    }
  }
}
</script>
