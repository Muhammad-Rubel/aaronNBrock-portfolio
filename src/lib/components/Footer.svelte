<script>
	import Logo from '$lib/assets/images/widget-logo.png';
	import Envelope from './Svg/Envelope.svelte';
	import Location from './Svg/Location.svelte';
	import Phone from './Svg/Phone.svelte';
	import Facebook from './Svg/SocialMedia/Facebook.svelte';
	import Github from './Svg/SocialMedia/Github.svelte';
	import Linkedin from './Svg/SocialMedia/Linkedin.svelte';
	import Medium from './Svg/SocialMedia/Medium.svelte';
	import Twitter from './Svg/SocialMedia/Twitter.svelte';

	const socialMediaLinks = [
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
	<div class="relative z-[-1]">
		<svg viewBox="0 0 1920 79"
			><path d="M0 0h1920v79L0 0z" data-name="Path 1450" fill="white" /></svg
		>
	</div>

	<div class="container">
		<!-- contact -->
		<div
			class="bg-[#400080] text-[#f8f9fa] py-[70px] px-10 md:px-20 lg:py-[84px] xl:py-[100px] rounded-[20px] -mt-32 lg:flex justify-between gap-4"
		>
			<div>
				<span class="text-xl leading-none text-center inline-block w-full lg:text-left"
					>Contact Me</span
				>
				<h2 class="h2 mt-5 text-center lg:text-left">Let's Start a Project</h2>
			</div>

			<div class="mt-8 flex justify-center lg:justify-end lg:mt-0 lg:items-end">
				<button class="btn btn-light btn-zoom">Get In Touch</button>
			</div>
		</div>

		<!-- footer -->
		<div
			class="text-[#f8f9fa] space-y-12 py-12 flex flex-col items-center lg:py-[74px] lg:flex-row lg:justify-between lg:items-center"
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
						<Phone classNames="fill-[#f8f9fa] w-4" />
						<span>+(609) 555 1212</span>
					</a>

					<a
						href="mailto:hello@aaronnbrock.com"
						class="flex justify-center items-center w-full space-x-3 lg:justify-start"
					>
						<Envelope classNames="fill-[#f8f9fa] w-6 stroke-[#1b2031]" />
						<span>Hello@AaronNBrock.com</span>
					</a>

					<span class="flex justify-center items-center w-full space-x-3 lg:justify-start">
						<Location classNames="fill-[#f8f9fa] w-4 stroke-[#1b2031]" />
						<span>1234 Main Street, Anytown, USA 12345</span>
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- copyright -->
	<div>
		<div class="container py-10 border-t border-[rgba(255,255,255,.2)] lg:grid grid-cols-2">
			<p class="text-[#f8f9fa] text-center lg:text-left">
				All right reserved copyright © Aaron N. Brock 2023
			</p>

			<!-- social media links -->
			<div class="mt-12 flex justify-center items-center space-x-6 lg:mt-0 lg:justify-end">
				{#each socialMediaLinks as item}
					<a href={item?.url} class="group">
						<svelte:component
							this={item?.icon}
							classNames="h-5 fill-[#f8f9fa] group-hover:fill-[#400080] transition-colors duration-300 ease-in-out"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
