<script>
	import Logo from '$lib/assets/images/logo.png';
	import HamburgerMenu from './Svg/HamburgerMenu.svelte';
	import Moon from './Svg/Moon.svelte';
	import Sun from './Svg/Sun.svelte';

	export let scrollY = 0;

	let darkMode = false;

	const navItems = [
		{
			name: 'Home',
			href: '#home'
		},
		{
			name: 'About',
			href: '#about'
		},
		{
			name: 'Services',
			href: '#services'
		},
		{
			name: 'Resume',
			href: '#resume'
		},
		{
			name: 'Reviews',
			href: '#reviews'
		},
		{
			name: 'Blog',
			href: '#blog'
		}
	];

	function toggleDarkMode() {
		darkMode = !darkMode;

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<svelte:window />

<header
	class="fixed bg-white dark:bg-dark top-4 left-5 right-5 z-50 rounded-lg lg:top-0 lg:left-0 lg:right-0 lg:rounded-none transition-all duration-300 ease-linear {scrollY >
	300
		? 'shadow-lg bg-opacity-100'
		: 'bg-transparent bg-opacity-0'}}"
>
	<div class="flex justify-between items-center py-4 lg:py-5 container">
		<a href="/">
			<img src={Logo} alt="" class="h-10 w-10" />
		</a>

		<nav class="hidden lg:block">
			<ul class="flex justify-center items-center">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="text-gray-dark p-2 hover:text-primary active:text-primary custom-transition text-center text-lg"
							>{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex justify-end items-center space-x-6">
			<button on:click={toggleDarkMode}>
				{#if darkMode}
					<Sun classNames="h-6 w-6 text-primary" />
				{:else}
					<Moon classNames="h-6 w-6 text-primary" />
				{/if}
			</button>

			<a href="/contact" class="hidden lg:block btn primary-btn btn-zoom">Get in Touch</a>
		</div>

		<button class="lg:hidden">
			<HamburgerMenu classNames="h-6 w-6 text-primary" />
		</button>
	</div>
</header>
