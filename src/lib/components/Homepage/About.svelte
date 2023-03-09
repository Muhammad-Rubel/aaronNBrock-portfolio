<script lang="ts">
	import AboutImage from '$lib/assets/images/about/about.jpg';
	import AboutMaskImage from '$lib/assets/images/about/about-mask-svg.svg';
	import Figure from '../Svg/Figure.svelte';
	import AboutBlob from '$lib/components/Svg/Homepage/About/AboutBlob.svelte';
</script>

<section id="about" class="py-12 lg:py-16 xl:py-24 overflow-hidden">
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
		<div class="lg:flex justify-between items-center relative">
			<!-- image -->
			<div class="lg:w-2/5 relative">
				<img
					src={AboutImage}
					alt="about-img"
					style="-webkit-mask:url({AboutMaskImage});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
				/>

				<div class="absolute -top-[7%] -left-[16%] transform z-00 animate-move-top">
					<Figure classNames="h-36 w-36" />
				</div>
			</div>

			<!-- text -->
			<div class="bg-gray-20 mt-8 rounded-20 p-6 lg:w-3/5 lg:p-12 lg:-translate-x-12 relative z-0">
				<h3 class="h3 text-light">Mission Statement</h3>
				<p class=" text-light mb-6">
					As a the leader in <a href="/">Google Cloud memes</a>, I know a thing or two about both
					communicating Google Cloud concepts and building applications on the platform. As a self
					proclaimed fan boy also, I keep up-to-date with Google’s newest offerings so you don’t
					have to. My goal is to streamline your GCP usage so you can fosus on what matters: growing
					your business.
				</p>

				<div class="space-x-7 pb-4">
					<a
						href="/contact"
						class="btn primary-btn hover:scale-105 hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)] inline-block"
						>Contact me</a
					>
					<a
						href="/"
						class="btn hover:scale-105 hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)] text-light border border-light hover:text-dark hover:border-light hover:bg-light active:border-light active:bg-light active:text-[#212529] inline-block"
						>Let's Chat</a
					>
				</div>
			</div>

			<div class="hidden lg:block absolute -top-[20%] -right-[12%] z-00">
				<AboutBlob classNames="h-96 w-96 text-gray-10 dark:text-gray" />
			</div>
		</div>
	</div>
</section>
