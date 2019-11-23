<template>
  <div>
    <h1>Category detail {{ $route.params.category_id }}</h1>
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
      fetch(`http://localhost:3000/categories/${to.params.category_id}`)
        .then((response) => response.json())
        .then((data) => next((vm) => vm.productsList = data))
    }
  }
</script>

<style scoped>

</style>
