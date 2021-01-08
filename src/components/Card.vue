
<script>
export default {
  name: 'Card',
  props: ['name', 'region', 'population', 'capital', 'currencies', 'languages']
}
</script>

<template>
  <div class="card-content">
    <router-link to="/">
      <button>
        <img src="@/assets/back-image.svg" />
      </button>
      <br />
    </router-link>
    <div class="name">{{ name }}</div>
    <div class="region">
      <h3>Region:</h3>&nbsp;
      <p>{{ region }}</p>
    </div>
    <div class="capital">
      <h3>Capital:</h3>&nbsp;
      <p>{{ capital }}</p>
    </div>
    <div class="population">
      <h3>Population:</h3>
      <p>{{ population }}</p>
    </div>
    <div class="currencies">
      <h3>Currencies:</h3>
      <ul v-for="currency in currencies" :key="currency">
        <li>{{currency}}</li>
      </ul>
    </div>

    <div class="languages">
      <h3>Languages:</h3>
      <ul v-for="language in languages" :key="language">
        <li>{{language}}</li>
      </ul>
    </div>
  </div>
</template>
