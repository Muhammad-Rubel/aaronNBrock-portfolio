<script>
	import Branding from '../Svg/service/Branding.svelte';
	import Creative from '../Svg/service/Creative.svelte';
	import UiUx from '../Svg/service/UiUx.svelte';
	import Web from '../Svg/service/Web.svelte';

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
</script>

<section id="services py-[50px] lg:pt-[100px] lg:pb-[275px]">
	<div class="container">
		<div>
			<span class="top-title">Area of Work</span>
			<h2 class="text-[3.375rem] font-semibold leading-[1.2] mb-6">Google Cloud</h2>
			<p class="mb-4 text-xl leading-normal">
				Using technology to empower development teams to deliver software better faster stronger.
			</p>
		</div>

		<div class="mt-12 lg:flex justify-between items-start space-x-8">
			{#each services as service}
				<div
					class="p-[30px] bg-white rounded-[20px]"
					style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
				>
					<!-- render icon -->
					{#if service.icon}
						<div class="mb-4">
							<svelte:component this={service.icon} />
						</div>
					{/if}

					<h4 class="mb-6 text-4xl font-semibold leading-[1.2]">{service.title}</h4>
					<p class="mb-4 text-xl leading-normal">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
