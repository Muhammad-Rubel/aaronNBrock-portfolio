<script>
	import '$lib/css/tailwind.css';
	// import Header from '$lib/components/Header.svelte';
</script>

<div class="relative">
	<!-- <Header /> -->
	<header>
		<h2 class="">Test</h2>
	</header>

	<main>
		<slot />
	</main>

	<!-- <Footer /> -->
</div>

<style lang="scss">
	header {
		h2 {
			color: red;
		}
	}

	h2 {
		color: blue;
	}
</style>
