<script lang="ts">
	import type { IContactOption } from '$lib/types/generalTypes';
	import Clock from '$lib/components/Svg/Clock.svelte';
	import Figure from '$lib/components/Svg/Figure.svelte';
	import LocationOutline from '$lib/components/Svg/LocationOutline.svelte';
	import Phone from '$lib/components/Svg/Phone.svelte';
	import ContactBgBlob from '../Svg/Contact/ContactBgBlob.svelte';
	import ContactCardBlob from '../Svg/Contact/ContactCardBlob.svelte';
	import FigureSmall from '../Svg/FigureSmall.svelte';

	const contactOptions: IContactOption[] = [
		{
			icon: LocationOutline,
			title: 'Socials',
			description: 'Follow me at my socials linked at the bottom!'
		},
		{
			icon: Phone,
			title: 'Email',
			description: 'Drop me a message at Hello@AaronNBrock.com'
		},
		{
			icon: Clock,
			title: "Let's Talk",
			description: 'Schedule a meeting here!'
		}
	];
</script>

<section class="relative">
	<div class="absolute top-[15%] -left-[7%] transform z-0 hidden lg:block animate-move-top">
		<Figure classNames="h-52 w-52" />
	</div>

	<div class="hidden lg:block absolute top-[15%] right-[10%] transform z-0 animate-move-top">
		<FigureSmall classNames="h-24 w-24" />
	</div>

	<div class="hidden lg:block absolute top-[6%] right-[2%] transform z-00 amin_spin">
		<ContactBgBlob classNames="h-52 w-52 text-gray-10" />
	</div>

	<div class="container relative">
		<h3 class="h1 text-center">Contacts</h3>
		<p class="text-center">Home</p>

		<!-- contact options -->
		<div
			class="py-12 lg:py-24 space-y-8 lg:flex justify-between items-stretch lg:space-y-0 lg:space-x-8"
		>
			{#each contactOptions as item}
				<div
					class="p-8 bg-white rounded-20 w-full dark:bg-gray"
					style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
				>
					<!-- render icon -->
					{#if item.icon}
						<div class="mb-4 relative h-32 w-24 flex justify-start items-end z-0">
							<svelte:component this={item.icon} classNames="h-16 text-primary" />

							<div class="absolute top-0 left-0 z-00">
								<ContactCardBlob classNames="text-gray-10" />
							</div>
						</div>
					{/if}

					<h4 class="h4">{item.title}</h4>
					<p class="mb-4">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
