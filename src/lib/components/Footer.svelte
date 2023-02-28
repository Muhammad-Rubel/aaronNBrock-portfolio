<script>
	import Logo from '$lib/assets/images/widget-logo.png';
	import Envelope from './Svg/Envelope.svelte';
	import Location from './Svg/Location.svelte';
	import Phone from './Svg/Phone.svelte';
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
			class="bg-[#400080] text-[#f8f9fa] py-[70px] px-10 md:py-[100px] md:px-20 rounded-[20px] -mt-32"
		>
			<div>
				<span class="text-xl leading-none text-center inline-block w-full">Contact Me</span>
				<h2 class="mt-5 text-3xl md:text-5xl leading-[1.2] font-semibold text-center">
					Let's Start a Project
				</h2>
			</div>

			<div class="mt-8 flex justify-center">
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
				<h4 class="text-2xl font-semibold leading-[1.2] mb-6 text-center">Sitemap</h4>

				<nav class="flex flex-col items-center space-y-2">
					<a href="/">Home</a>
					<a href="/">About Me</a>
					<a href="/">Blog</a>
				</nav>
			</div>

			<div>
				<h4 class="text-2xl font-semibold leading-[1.2] mb-6 text-center">Address</h4>

				<div class="flex flex-col items-center space-y-2">
					<a href="tel:+6095551212" class="flex justify-center items-center w-full space-x-3">
						<Phone classNames="fill-[#f8f9fa] w-4" />
						<span>+(609) 555 1212</span>
					</a>

					<a
						href="mailto:hello@aaronnbrock.com"
						class="flex justify-center items-center w-full space-x-3"
					>
						<Envelope classNames="fill-[#f8f9fa] w-6 stroke-[#1b2031]" />
						<span>Hello@AaronNBrock.com</span>
					</a>

					<span class="flex justify-center items-center w-full space-x-3">
						<Location classNames="fill-[#f8f9fa] w-4 stroke-[#1b2031]" />
						<span>1234 Main Street, Anytown, USA 12345</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</footer>
