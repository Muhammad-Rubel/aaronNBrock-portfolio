<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import Figure from '../Svg/Figure.svelte';
	import BackgroundShape from '../Svg/Homepage/service/BackgroundShape.svelte';
	import Branding from '../Svg/Homepage/service/Branding.svelte';
	import Creative from '../Svg/Homepage/service/Creative.svelte';
	import UiUx from '../Svg/Homepage/service/UiUx.svelte';
	import Web from '../Svg/Homepage/service/Web.svelte';
	import ServiceBg from '../Svg/ServiceBg.svelte';
	import ServiceCard from './ServiceCard.svelte';

	const services = [
		{
			title: 'Teaching',
			description:
				'Learn to use Google Cloud like a pro. From the basics to advanced strategies, I’ll give you the knowledge and skills you need to fully leverage the power of Google Cloud.',
			icon: Creative
		},
		{
			title: 'Tuning',
			description:
				'Take control of your Google Cloud costs. From identifying and eliminating unnecessary expenses to implementing cost-saving strategies, I’ll help you get the most out of your investment.',
			icon: Web
		},
		{
			title: 'Templates',
			description:
				'Streamline your Google Cloud operations with templates. From deployments to scaling, templates provide you with a proven foundation to build upon, and allow you to focus on growing your business.',
			icon: Branding
		}
	];

	const options = {
		type: 'loop',
		perPage: 2,
		perMove: 1,
		gap: 30,
		autoplay: false,
		interval: 3000,
		padding: '2rem',
		arrows: false,
		pagination: true,
		breakpoints: {
			640: {
				perPage: 1,
				gap: 10
			},
			768: {
				perPage: 2,
				gap: 30
			}
		},
		classes: {
			// Add classes for arrows.
			arrows: 'splide__arrows service-slide-arrows',
			arrow: 'splide__arrow service-slide-arrow',
			prev: 'splide__arrow--prev service-slide-prev',
			next: 'splide__arrow--next service-slide-next',

			// Add classes for pagination.
			pagination: 'splide__pagination service-slide-pagination', // container
			page: 'splide__pagination__page service-slide-page' // each button
		}
	};
</script>

<section
	id="services"
	class="py-[76px] md:py-[50px] lg:py-[78px] xl:py-[100px] relative overflow-hidden"
>
	<div>
		<div class="container">
			<div class="lg:w-1/2">
				<span class="top-title pre-line-top-title">Area of Work</span>
				<h2 class="text-[3.375rem] font-semibold leading-[1.2] mb-6">Google Cloud</h2>
				<p class="mb-4 text-xl leading-normal">
					Using technology to empower development teams to deliver software better faster stronger.
				</p>
			</div>
		</div>

		<div class="mt-12 lg:hidden">
			<Splide hasTrack={false} {options}>
				<SplideTrack>
					{#each services as service}
						<SplideSlide>
							<ServiceCard {service} />
						</SplideSlide>
					{/each}
				</SplideTrack>
			</Splide>
		</div>

		<div class="hidden mt-12 container lg:flex justify-between items-start space-x-10">
			{#each services as service}
				<ServiceCard {service} />
			{/each}
		</div>
	</div>

	<div class="hidden lg:block absolute bottom-[4%] left-[6%] transform z-0 move_top">
		<Figure classNames="h-[120px] w-[120px]" />
	</div>

	<div class="hidden lg:block absolute -bottom-[10%] -left-[7%] transform z-[-1]">
		<BackgroundShape classNames="h-[465px] w-[410px]" />
	</div>

	<ServiceBg classNames="w-[61%] absolute top-0 right-0 z-[-2]" />
</section>

<style>
	:global(.service-slide-pagination) {
		@apply -bottom-[4rem];
	}

	@media (min-width: 640px) {
		:global(.service-slide-pagination) {
			bottom: -2rem;
		}
	}

	:global(.service-slide-page) {
		background-color: #c2c8cc !important;
	}

	:global(.service-slide-pagination .is-active) {
		background-color: #400080 !important;
		transform: none;
	}
</style>
