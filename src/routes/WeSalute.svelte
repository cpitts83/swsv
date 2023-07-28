<script>
	import Bg from '$lib/bgimg.jpg';

	/**
	 * @type {any}
	 */
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<main>
	<article class="card" style:transform={`translate3d(0, ${scroll}px, 0)`} style:background="blue">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et unde ab expedita odit quia
			excepturi illum laborum adipisci repellendus veniam omnis sed, inventore nam at vitae incidunt
			repellat dolorum?
		</p>
		<h1 class="card p-4 text-2xl">We Salute You</h1>
	</article>
	<article class="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et unde ab expedita odit quia
			excepturi illum laborum adipisci repellendus veniam omnis sed, inventore nam at vitae incidunt
			repellat dolorum?
		</p>
		<h1 class="card p-4 text-2xl">We Salute You</h1>
	</article>
	<article class="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et unde ab expedita odit quia
			excepturi illum laborum adipisci repellendus veniam omnis sed, inventore nam at vitae incidunt
			repellat dolorum?
		</p>
		<h1 class="card p-4 text-2xl">We Salute You</h1>
	</article>
	<article class="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et unde ab expedita odit quia
			excepturi illum laborum adipisci repellendus veniam omnis sed, inventore nam at vitae incidunt
			repellat dolorum?
		</p>
		<h1 class="card p-4 text-2xl">We Salute You</h1>
	</article>
	<article class="card">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et unde ab expedita odit quia
			excepturi illum laborum adipisci repellendus veniam omnis sed, inventore nam at vitae incidunt
			repellat dolorum?
		</p>
		<h1 class="card p-4 text-2xl">We Salute You</h1>
	</article>
</main>
<style>
	p {
		position: fixed;
		z-index: 10;
	}
	h1 {
		position: fixed;
		z-index: 5;
	}
</style>