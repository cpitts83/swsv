<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Logo from '$lib/prodpics/logo.png'
</script>

<main>
	<Header />
	<img src={Logo} alt="Salute Weight Lifters Logo" srcset="" />
	<slot />
	<Footer />
</main>

<style>
	img {
		opacity: 0.25;
		overflow: hidden;
		position: fixed;
	    margin: 40px;
		z-index: -1;
	}
</style>



