<script>
	import HeroImage from '$lib/assets/images/hero/hero.jpg';
	import HeroMaskSvg from '$lib/assets/images/hero/hero-mask-svg.svg';
	import HeroMaskPng from '$lib/assets/images/hero/hero-mask-svg.png';
	import PopupThumb from '$lib/assets/images/hero/popup-thumb.jpg';
	import Figure from '../Svg/Figure.svelte';
	import HeroBg from '../Svg/HeroBg.svelte';
	import HeroBlob from './HeroBlob.svelte';
</script>

<section id="home" class="pt-[150px] pb-8 lg:pt-44 lg:pb-48 xl:py-48 relative z-0">
	<div
		class="container space-y-[60px] lg:flex justify-between items-center lg:space-x-20 lg:space-y-0 relative z-10"
	>
		<!-- text -->
		<div class="text-center lg:text-left w-full relative">
			<div class="relative z-0">
				<span class="top-title pre-line-top-title">Hello there,</span>

				<h1 class="h1 mt-4">
					Let’s make <br /> <span class="text-primary">Google Cloud</span> <br /> simple
				</h1>

				<p class="text-2xl mb-16 leading-normal">
					Effortlessly navigate your way to success on Google Cloud with expert guidance.
				</p>

				<a href="/contact" class="btn primary-btn btn-zoom inline-block">Contact me</a>
			</div>

			<div class="absolute -top-[45%] -left-[45%] z-[-1]">
				<HeroBlob classNames="h-[440px] w-[440px]" />
			</div>
		</div>

		<!-- image -->
		<div class="w-full relative z-0">
			<div class="relative z-10">
				<img src={HeroImage} alt="" class="clip-mask w-full" />
				<!-- <img src={HeroImage} alt="hero-image" class={`-webkit-mask: url(${HeroMaskPng}); test`} /> -->

				<!-- video -->
				<div
					class="h-40 w-[250px] border border-[#707070] rounded-[20px] overflow-hidden absolute top-full left-1/2 transform -translate-x-1/2 z-10 -mt-28 lg:left-0 lg:-mt-64"
				>
					<img src={PopupThumb} alt="" class="h-full w-full object-cover object-center" />

					<div
						class="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.6)] z-10 flex justify-center items-center group"
					>
						<button
							class="h-[60px] w-[60px] rounded-full flex justify-center items-center bg-white transform group-hover:scale-110 custom-transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 21 24"
								class="h-6 w-6 ml-1 text-primary"
								fill="currentColor"
							>
								><path
									d="M17.961 10.264a2 2 0 010 3.473L2.992 22.29A2 2 0 010 20.554V3.446A2 2 0 012.992 1.71z"
									data-name="Polygon 4"
								/></svg
							>
						</button>
					</div>
				</div>
			</div>

			<div class="absolute top-0 left-1/2 -mt-14 transform -translate-x-1/2 z-0 move_left">
				<Figure classNames="h-[150px] w-[150px]" />
			</div>
		</div>
	</div>

	<!-- gray bg -->
	<HeroBg classNames="w-[65%] absolute top-0 left-0 z-0" />

	<!-- figure -->
	<div class="absolute bottom-[20px] -left-[130px] transform z-0 hidden lg:block hero_footer_svg">
		<Figure classNames="h-[201px] w-[201px]" />
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
	/* 
	.test {
		-webkit-mask: url(https://aaronnbrock.com/images/hero/hero-mask-svg.png);
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-size: contain;
		-webkit-mask-position: center center;
	} */

	.hero_footer_svg {
		animation: hero_footer_svg_move_top 5s infinite linear;
	}

	@keyframes hero_footer_svg_move_top {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(15px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
