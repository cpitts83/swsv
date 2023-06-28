<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';

	const products: Product[] = [
		{
			id: '1',
			name: 'Beautifull & Strong',
			price: 30,
			photo: './b&s.png'
		},
		{
			id: '2',
			name: 'Purple Hoodie',
			price: 60,
			photo: './purphood.png'
		},
		{
			id: '3',
			name: 'Blue Salute Hat',
			price: 30,
			photo: './bluehat.png'
		}
	];
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="grid grip-cols-3 gap-4">
		<article class="col-span-3">
			<h1 class="text-3xl font-bold">Salute Weight Lifters</h1>
		</article>
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
		<article class="col-span-3">
			<button class="btn variant-filled-primary">Checkout</button>
		</article>
	</section>
</main>
