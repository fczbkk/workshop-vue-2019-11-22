<template>
  <div class="productsList">
    <ProductListItem
      v-for="(item) in list"
      :key="item.id"
      :productData="item"
    />
  </div>
</template>

<script>
  import ProductListItem from './ProductListItem'
  export default {
    components: {
      ProductListItem
    },
    props: {
      list: {
        type: Array,
        required: false,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
