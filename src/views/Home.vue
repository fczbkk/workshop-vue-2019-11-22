<template>
  <div class="home">
    <h1>Home</h1>
    <p>
      <router-link :to="{name: 'categories'}">Go to categories</router-link>
    </p>
    <ProductList :list="productsList" />
  </div>
</template>

<script>
  import ProductList from '../components/ProductList'
  export default {
    components: {
      ProductList
    },
    data () {
      return {
        productsList: []
      }
    },
    beforeRouteEnter (to, from, next) {
      fetch(`http://localhost:3000/highlighted`)
        .then((response) => response.json())
        .then((data) => next((vm) => vm.productsList = data))
    }
  }
</script>
