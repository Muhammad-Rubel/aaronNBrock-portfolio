<script>
	import '$lib/css/tailwind.css';
	import '$lib/css/_variables.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let scrollY = 0;

	const handleOnScroll = () => {
		console.log(window.scrollY, 'scrollY');
		scrollY = window.scrollY;
	};
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="relative">
	<Header {scrollY} />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	@use '$lib/css/_variables.scss' as *;
</style>
