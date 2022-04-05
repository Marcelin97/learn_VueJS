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
		<aside class="price-cart">
			<h2 class="cartSubTotal">Prix total : €</h2>
		</aside>
		<footer class="footer">
			<p>{{ copyright }}</p>
		</footer>
	
		<!-- test d'affichage on click avec la méthod "close" -->
		<div class="success" v-if="success">
			<fa class="close" icon="close" @click="close"/>
		<ul>
			<li v-for="person in persons" :key="person.id"> {{person}} </li>
		</ul>
		</div>
		<div v-else>
			<h1>Sinon j'affiche ceci</h1>
		</div>
		<!-- test d'affichage on click avec la méthod "close" -->

		<!-- test form -->
		<div>
			<input type="text" :value="message"/>
				<div class="success2" v-if="success2">
					<fa class="close" icon="close" @click="closeForm"/>
					<p>{{message}}</p>
				</div>
		</div>
		<!-- test form -->

	</div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "ItemsWorld",
  components: {
    MenuItem,
  },
  // * la propriété data contient toutes les variables que l'on souhaite injecter au niveau de notre application
  data() {
    return {
      message: "bonjour",
	//   <!-- test d'affichage on click avec la méthod "close" -->
      success : function (){
		  return { success : true
		  }
	  },
	//   <!-- test form -->
	  success2 : function (){
		  return { success2 : true
		  }
	  },
      persons: ["joe", "marion"],
      restaurantName: "La belle vue",
      shoppingCart: 0,
      simpleMenu: [
        {
          name: "Croissant",
          image: {
            source: "/images/crossiant.jpg",
            alt: "Un croissant",
          },
          inStock: true,
          qty: this.quantity,
          price: 2.99,
        },
        {
          name: "Baguette de pain",
          image: {
            source: "/images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          qty: this.quantity,
          price: 4.99,
        },
        {
          name: "Éclair",
          image: {
            source: "/images/eclair.jpg",
            alt: "Éclair au chocolat",
          },
          inStock: false,
          qty: this.quantity,
          price: 1.99,
        },
      ],
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount;
    },
	// <!-- test d'affichage on click avec la méthod "close" -->
    close: function () {
      this.success = false;
    },
	//   <!-- test form -->
    closeForm: function () {
      this.success = false;
    },
  },
};
</script>
