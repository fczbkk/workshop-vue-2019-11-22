<template>
  <div class="box">
    <div class="title">
      <h3>{{ productData.title }}</h3>
    </div>
    <div class="content">
      <div class="productItem">
        <div class="productImage">
          <img :src="imageSource" alt="" height="100">
        </div>
        <p>{{ productData.description }}</p>
        <div class="price">
          {{ productData.price }},- Kč
        </div>
        <div class="addToCart">
          <AddToCart :productId="productData.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddToCart from './AddToCart'
  export default {
    components: { AddToCart },
    props: {
      productData: {
        type: Object,
        required: true
      }
    },
    computed: {
      imageSource () {
        return `http://localhost:3000/images/${this.productData.image}`
      }
    }
  }
</script>

<style scoped>

</style>
