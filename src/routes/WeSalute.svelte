<script>
	import Bg from '$lib/prodpics/fitnessgroup.png';
</script>

<main class="bg-cover bg-center" style="background-image: url({Bg})">
	{#each [1, 2, 3, 4, 5] as _, i (i)}
		<article class="card sk-card sk-card-white sk-rounded sk-shadow-lg" style="transform: translateY({i * 10}px)">
			<p class="sk-text text-2xl sk-text-gray-700">
				To the individuals that hit the gym day in and day out, persevering through the pain, and
				pushing themselves to a new level and personal best
			</p>
			<h1 class="sk-text text-3xl sk-font-bold sk-m-4">We Salute You</h1>
		</article>
	{/each}
</main>

<style>
	main {
		height: 200vh;
	}

	.card {
		position: relative;
		top: 0vh;
		max-width: 50rem;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
