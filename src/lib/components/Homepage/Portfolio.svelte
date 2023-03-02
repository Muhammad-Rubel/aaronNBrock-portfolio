<script>
	import portfolio1 from '$lib/assets/images/portfolio/portfolio-1.png';
	import portfolio2 from '$lib/assets/images/portfolio/portfolio-2.png';
	import portfolio3 from '$lib/assets/images/portfolio/portfolio-3.png';
	import portfolio4 from '$lib/assets/images/portfolio/portfolio-4.png';
	import PortfolioCard from './PortfolioCard.svelte';

	const portfolio = [
		{
			slug: '',
			category: 'Development, UX Design',
			title: 'Case Study One',
			image: portfolio1
		},
		{
			slug: '',
			category: 'Web Design, Branding',
			title: 'Case Study One',
			image: portfolio2
		},
		{
			slug: '',
			category: 'UX Design, UX Research',
			title: 'Recipe App Ux Study',
			image: portfolio3
		},
		{
			slug: '',
			category: 'UX Case Study for Agriculture App',
			title: 'UX Design',
			image: portfolio4
		}
	];
</script>

<section
	id="portfolio"
	class="services py-[82px] md:py-[50px] lg:py-[65px] xl:pt-[100px] xl:pb-[135px]"
>
	<div class="container">
		<div>
			<span class="top-title mb-16 text-center inline-block w-full">My Portfolio</span>
			<h2 class="h2 text-center">Check Some of My Recent Work</h2>
		</div>

		<div class="mt-12 md:grid grid-cols-2">
			{#each portfolio as item, i}
				<PortfolioCard {item} index={i} />
			{/each}
		</div>
	</div>
</section>
