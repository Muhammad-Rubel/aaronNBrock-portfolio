<script lang="ts">
	import AboutImage from '$lib/assets/images/about/about.jpg';
	import AboutMaskImage from '$lib/assets/images/about/about-mask-svg.svg';
	import Figure from '../Svg/Figure.svelte';
	import AboutBlob from '$lib/components/Svg/Homepage/About/AboutBlob.svelte';
</script>

<section id="about" class="py-[50px] lg:py-[67px] xl:py-[100px] overflow-hidden">
	<div class="container">
		<!-- heading -->
		<div>
			<span class="text-xl leading-normal text-center text-gray-dark mb-4 inline-block w-full">
				About About
			</span>
			<h2 class="h2 text-center">About About About</h2>
			<p class="mb-16 text-center">About About About About About</p>
		</div>

		<!-- content -->
		<div class="lg:flex justify-between items-center">
			<!-- image -->
			<div class="lg:w-[45%] relative">
				<img
					src={AboutImage}
					alt="about-img"
					style="-webkit-mask:url({AboutMaskImage});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
				/>

				<div class="absolute -top-[7%] -left-[16%] transform z-[-1] move_top">
					<Figure classNames="h-[150px] w-[150px]" />
				</div>
			</div>

			<!-- text -->
			<div
				class="bg-[#1b2031] mt-[30px] rounded-[20px] p-6 lg:w-[55%] lg:p-12 transform lg:-translate-x-12 relative z-0"
			>
				<div class="relative z-10">
					<h3 class="h3 text-light">Mission Statement</h3>
					<p class=" text-light mb-6">
						As a the leader in <a href="/">Google Cloud memes</a>, I know a thing or two about both
						communicating Google Cloud concepts and building applications on the platform. As a self
						proclaimed fan boy also, I keep up-to-date with Google’s newest offerings so you don’t
						have to. My goal is to streamline your GCP usage so you can fosus on what matters:
						growing your business.
					</p>

					<div class="space-x-7 pb-4">
						<a href="/contact" class="btn primary-btn btn-zoom inline-block">Contact me</a>
						<a href="/" class="btn btn-zoom btn-outline-light inline-block">Let's Chat</a>
					</div>
				</div>

				<div class="hidden lg:block absolute -top-[55%] -right-[22%] z-0">
					<AboutBlob classNames="h-[400px] w-[362px] text-gray-10" />
				</div>
			</div>
		</div>
	</div>
</section>
