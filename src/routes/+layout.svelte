<script>
	import '$lib/css/tailwind.css';
	import '$lib/css/_variables.scss';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="relative">
	<Header />

	<main>
		<slot />
	</main>

	<!-- <Footer /> -->
</div>

<style lang="scss">
	@use '$lib/css/_variables.scss' as *;

	header {
		h2 {
			// add primary color from variables.scss
			color: $primary;
			font-size: 5rem;
		}
	}

	h2 {
		color: blue;
	}
</style>
