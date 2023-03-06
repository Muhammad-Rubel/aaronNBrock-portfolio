<script lang="ts">
	import type { ISocialMediaLink } from '$lib/types/generalTypes';

	import Logo from '$lib/assets/images/widget-logo.png';
	import Envelope from './Svg/Envelope.svelte';
	import Shape1 from './Svg/Footer/Shape1.svelte';
	import Shape2 from './Svg/Footer/Shape2.svelte';
	import Location from './Svg/Location.svelte';
	import Phone from './Svg/Phone.svelte';
	import Facebook from './Svg/SocialMedia/Facebook.svelte';
	import Github from './Svg/SocialMedia/Github.svelte';
	import Linkedin from './Svg/SocialMedia/Linkedin.svelte';
	import Medium from './Svg/SocialMedia/Medium.svelte';
	import Twitter from './Svg/SocialMedia/Twitter.svelte';

	const socialMediaLinks: ISocialMediaLink[] = [
		{
			url: 'https://github.com/AaronNBrock',
			icon: Github
		},
		{
			url: 'https://www.linkedin.com/in/AaronNBrock/',
			icon: Linkedin
		},
		{
			url: 'https://www.facebook.com/AaronNBrock/',
			icon: Facebook
		},
		{
			url: 'https://twitter.com/AaronNBrock',
			icon: Twitter
		},
		{
			url: 'https://medium.com/@AaronNBrock',
			icon: Medium
		}
	];
</script>

<footer class="bg-[#1b2031] mt-40 relative z-0">
	<div class="relative z-[-1] text-white dark:text-dark">
		<svg viewBox="0 0 1920 79"
			><path d="M0 0h1920v79L0 0z" data-name="Path 1450" fill="currentColor" /></svg
		>
	</div>

	<div class="container">
		<!-- contact -->
		<div
			class="relative bg-primary dark:bg-teal text-light py-[70px] px-10 md:px-20 lg:py-[84px] xl:py-[100px] rounded-[20px] -mt-32 overflow-hidden"
		>
			<div class="md:flex justify-between gap-4 relative z-10">
				<div class="">
					<span class="text-xl leading-none pre-line-top-title before:bg-light">Contact Me</span>
					<h2 class="h2 mt-5 text-left md:mb-0">Let's Start a Project</h2>
				</div>

				<div class="mt-8 flex justify-center md:justify-end md:mt-0 md:items-end">
					<button class="btn btn-light btn-zoom">Get In Touch</button>
				</div>
			</div>

			<div
				class="absolute -top-[43%] left-[2%] transform -rotate-[20deg] z-0 footer-shape-1-move-left"
			>
				<Shape1 classNames="h-[315px] w-[357px] fill-[#0101011a] dark:fill-[#0101011a]" />
			</div>

			<div class="absolute top-[12%] -right-[9%] transform rotate-[80deg] z-0">
				<Shape2 classNames="h-[208px] w-[235px] fill-[#0101011a] dark:fill-[#0101011a]" />
			</div>
		</div>

		<!-- footer -->
		<div
			class="text-light space-y-12 py-12 flex flex-col items-center lg:py-[74px] lg:flex-row lg:justify-between lg:items-center"
		>
			<div>
				<img src={Logo} alt="" />
			</div>

			<div>
				<h4 class="h4 mb-6 text-center lg:text-left">Sitemap</h4>

				<nav class="flex flex-col items-center space-y-2 lg:items-start">
					<a href="/">Home</a>
					<a href="/">About Me</a>
					<a href="/">Blog</a>
				</nav>
			</div>

			<div>
				<h4 class="h4 mb-6 text-center lg:text-left">Address</h4>

				<div class="flex flex-col items-center space-y-2 lg:items-start">
					<a
						href="tel:+6095551212"
						class="flex justify-center items-center w-full space-x-3 lg:justify-start"
					>
						<span class="w-6 flex justify-center items-center">
							<Phone classNames="fill-light w-4" />
						</span>
						<span>+(609) 555 1212</span>
					</a>

					<a
						href="mailto:hello@aaronnbrock.com"
						class="flex justify-center items-center w-full space-x-3 lg:justify-start"
					>
						<span class="w-6 flex justify-center items-center">
							<Envelope classNames="fill-light w-6 stroke-[#1b2031]" />
						</span>
						<span>Hello@AaronNBrock.com</span>
					</a>

					<span class="flex justify-center items-center w-full space-x-3 lg:justify-start">
						<span class="w-6 flex justify-center items-center">
							<Location classNames="fill-light w-4 stroke-[#1b2031]" />
						</span>
						<span>1234 Main Street, Anytown, USA 12345</span>
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- copyright -->
	<div>
		<div class="container py-10 border-t border-[rgba(255,255,255,.2)] lg:grid grid-cols-2">
			<p class="text-light text-center lg:text-left">
				All right reserved copyright © Aaron N. Brock 2023
			</p>

			<!-- social media links -->
			<div class="mt-12 flex justify-center items-center space-x-6 lg:mt-0 lg:justify-end">
				{#each socialMediaLinks as item}
					<a href={item?.url} class="group">
						<svelte:component
							this={item?.icon}
							classNames="h-5 fill-light group-hover:fill-primary transition-colors duration-300 ease-in-out"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer-shape-1-move-left {
		animation: footer-shape-1-move-left 5s linear infinite;
	}

	@keyframes footer-shape-1-move-left {
		0% {
			transform: translateX(0) rotate(-20deg);
		}
		50% {
			transform: translateX(15px) rotate(-20deg);
		}
	}
</style>
