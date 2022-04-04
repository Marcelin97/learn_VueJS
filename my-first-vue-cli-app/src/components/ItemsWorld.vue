<template>
  	<div class="bye">
		<h1>{{ restaurantName }}</h1>
		<p class="description">
			Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
			notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
			matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
			est difficile de s'arrêter.
		</p>
		<section class="menu">
			<h2>Menu</h2>
			<MenuItem
				v-for="item in simpleMenu"
				:addToShoppingCart="addToShoppingCart"
				:name="item.name"
				:image="item.image"
				:price="item.price"
				:quantity="item.quantity"
				:inStock="item.inStock"
				:key="item.name"
			/>
		</section>

		<aside class="shopping-cart">
			<h2>Panier d'achat : {{ shoppingCart }} articles</h2>
		</aside>
		<footer class="footer">
			<p>{{ copyright }}</p>
		</footer>
	</div>
</template>

<script>
import MenuItem from "./MenuItem.vue"

export default {
	name: "ItemsWorld",
	components: {
		MenuItem
	},
	data() {
		return {
			restaurantName: "La belle vue",
			shoppingCart: 0,
			simpleMenu: [
				{
					name: "Croissant",
					image: {
						source: "/images/crossiant.jpg",
						alt: "Un croissant"
					},
					inStock: true,
					qty: this.quantity,
					price: 2.99
				},
				{
					name: "Baguette de pain",
					image: {
						source: "/images/french-baguette.jpeg",
						alt: "Quatre baguettes de pain"
					},
					inStock: true,
					qty: this.quantity,
					price: 4.99
				},
				{
					name: "Éclair",
					image: {
						source: "/images/eclair.jpg",
						alt: "Éclair au chocolat"
					},
					inStock: false,
					qty: this.quantity,
					price: 1.99
				}
			]
		}
	},
	computed: {
		copyright() {
			const currentYear = new Date().getFullYear()

			return `Copyright ${this.restaurantName} ${currentYear}`
		}
	},
	methods: {
		addToShoppingCart(amount) {
			this.shoppingCart += amount
		}
	}
}
</script>