<template>
  <div>
    <h1>Categories list</h1>
    <ul>
      <li
        v-for="(name, id) in categoriesList"
        :key="id"
      >
        <router-link :to="{name: 'categoryDetail', params: {category_id: id}}">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        categoriesList: {}
      }
    },
    created () {
      fetch('http://localhost:3000/categories')
        .then((response) => response.json())
        .then((responseData) => this.categoriesList = responseData);
    }
  }
</script>

<style scoped>

</style>
