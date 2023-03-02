<script>
	import Logo from '$lib/assets/images/logo.png';
	import HamburgerMenu from './Svg/HamburgerMenu.svelte';

	export let scrollY = 0;

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
</script>

<header
	class="fixed bg-white top-4 left-5 right-5 z-50 rounded-lg lg:top-0 lg:left-0 lg:right-0 lg:rounded-none transition-all duration-300 ease-linear {scrollY >
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

		<a href="/contact" class="hidden lg:block btn primary-btn btn-zoom">Get in Touch</a>

		<button class="lg:hidden">
			<HamburgerMenu classNames="h-6 w-6 text-primary" />
		</button>
	</div>
</header>
