<script>
export default {
  name: "MenuItem",
  props: ["addToShoppingCart", "image", "inStock", "name", "quantity","price"],
  data() {
		return {
			onSale: false
		}
	},
	computed: {
		generatedPrice() {
			return this.price
		}
	},
	// beforeMount() {
	// 	const today = new Date().getDate()

	// 	if (today % 2 === 0) {
	// 		this.onSale = true
	// 	}
	// }
};
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div class="item__image">
      <h3>{{ name }}</h3>
      <p>Prix : {{ generatedPrice }}</p>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <div>
        <label for="add-item-quantity">Quantité : {{ quantity }}</label>
        <input v-model.number="qty" id="add-item-quantity" type="number" min="0"/>
        <button @click="addToShoppingCart(qty)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-item{
	height:25em;
	margin-top: 2em;
	border:1px solid
}
img{
	height:10em;
}
.item__image{
	height:5em;
}
</style>
