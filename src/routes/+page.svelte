<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../cart';
	import Showcase from './Showcase.svelte';
	import WeSalute from './WeSalute.svelte';

	const products: Product[] = [
		{
			id: 'price_1NMx76FmxvRMcIUHw5qTFHni',
			name: 'Beautifull & Strong',
			price: 30,
			sizes: ['S', 'M', 'L'],
			photo: './b&s.png'
		},
		{
			id: 'price_1NMx7ZFmxvRMcIUHqERQh5gh',
			name: 'Purple Hoodie',
			price: 60,
			sizes: ['S', 'M', 'L'],
			photo: './bspurplehood.png'
		},
		{
			id: 'price_1NMx8KFmxvRMcIUH2yTnRp70',
			name: 'Blue Salute Hat',
			price: 30,
			sizes: ['One Size'],
			photo: './bluehat.png'
		},
		{
			id: 'price_1NMx8ZFmxvRMcIUHqQYQYQ8F',
			name: 'white tee and Hat combo',
			price: 30,
			sizes: ['S', 'M', 'L'],
			photo: './bwtcombo.png'
		},

	];
	async function checkout() {
		await fetch('api/stripeCheckout', {
		   
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

<Showcase />
<WeSalute />
<div class="container h-full mx-auto flex justify-center items">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
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
