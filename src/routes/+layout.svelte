<script>
	import '@fontsource/source-serif-pro/400.css';
	import '@fontsource/source-serif-pro/600.css'; // semibold

	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css'; // semibold

	import '@fontsource/source-code-pro/400.css';
	import '@fontsource/source-code-pro/600.css'; // semibold

	import '$lib/css/tailwind.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let scrollY = 0;

	const handleOnScroll = () => {
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
