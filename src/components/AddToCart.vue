<template>
  <button>🛒 Add to cart</button>
</template>

<script>
  export default {
    name: 'AddToCart',
    props: {
      productId: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
