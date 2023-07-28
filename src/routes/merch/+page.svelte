<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
import { cartItems } from '$lib/cart'



	const products: Product[] = [
		{
			id: 'price_1NMx76FmxvRMcIUHw5qTFHni',
			name: 'Beautifull & Strong',
			price: 30,
			photo: './b&s.png'
		},
		{
			id: 'price_1NMx7ZFmxvRMcIUHqERQh5gh',
			name: 'Purple Hoodie',
			price: 60,
			photo: './bspurplehood.png'
		},
		{
			id: 'price_1NMx8KFmxvRMcIUH2yTnRp70',
			name: 'Blue Salute Hat',
			price: 30,
			photo: './bluehat.png'
		},
		{
			id: 'price_1NMx8ZFmxvRMcIUHqQYQYQ8F',
			name: 'white tee and Hat combo',
			price: 30,
			photo: './bwtcombo.png'
		},
    {
			id: 'price_1NMx8ZFmxvRMcIUHqQYQYQ8F',
			name: 'white tee and Hat combo',
			price: 30,
			photo: './bwtcombo.png'
		},
    

	];
	async function checkout() {
		await fetch('api/stripeCheckout', {
			// http://localhost:5173/api/stripeCheckout
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ items: get(cartItems) })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				window.location.replace(data.url);
			});
	}
</script>
<div class="container h-full mx-auto grid justify-center items">
	
	<div class="grid grid-cols-4 gap-4">
		<div class="col-span-4">
			<h1 class="text-lg">Salute Weight Lifters</h1>
		</div>
		{#each products as product}
			<ProductCard {product} />
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary" on:click={() => checkout()}>Checkout</button>
		</div>
	</div>
</div>
