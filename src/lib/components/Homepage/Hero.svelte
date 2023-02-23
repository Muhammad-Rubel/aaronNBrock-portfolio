<script>
	import HeroImage from '$lib/assets/images/hero/hero.jpg';
	import HeroMaskSvg from '$lib/assets/images/hero/hero-mask-svg.svg';
	import HeroMaskPng from '$lib/assets/images/hero/hero-mask-svg.png';
</script>

<section>
	<div class="container pt-24">
		<!-- text -->
		<div class="text-center lg:text-left">
			<span class="text-2xl leading-normal">Hello there,</span>

			<h1 class="text-4xl xl:text-6xl leading-[1.2] font-semibold mt-4 mb-6">
				Let’s make <br /> <span class="text-primary">Google Cloud</span> <br /> simple
			</h1>

			<p class="text-2xl mb-16 leading-normal">
				Effortlessly navigate your way to success on Google Cloud with expert guidance.
			</p>

			<a href="/contact" class="btn primary-btn btn-zoom">Contact me</a>
		</div>

		<!-- image -->
		<div>
			<div class="relative w-2/3  overflow-hidden z-0">
				<img src={HeroImage} alt="" class="clip-mask" />
			</div>
		</div>
	</div>
</section>

<style>
	/* .clip-mask {
		-webkit-clip-path: inset(200px round 80px 20px 30px 10px);
		clip-path: inset(200px round 80px 20px 30px 10px);
	} */
	.clip-mask {
		-webkit-clip-path: path(
			'M30,0H590a30,30,0,0,1,30,30V800a30,30,0,0,1-30,30L30,770A30,30,0,0,1,0,740V30A30,30,0,0,1,30,0Z'
		);
		clip-path: path(
			'M30,0H590a30,30,0,0,1,30,30V800a30,30,0,0,1-30,30L30,770A30,30,0,0,1,0,740V30A30,30,0,0,1,30,0Z'
		);
	}
</style>
