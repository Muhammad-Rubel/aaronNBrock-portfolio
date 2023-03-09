<script lang="ts">
	import type { IService } from '$lib/types/generalTypes';
	import ServiceCardBlob from '$lib/components/Svg/Homepage/Service/ServiceCardBlob.svelte';

	export let service: IService;
</script>

<div
	class="p-8 bg-white dark:bg-gray rounded-20 mb-12 h-[500px] md:h-[520px] lg:h-[620px] xl:h-[520px] w-full"
	style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
>
	<!-- render icon -->
	{#if service?.icon}
		<div class="mb-4 relative h-32 w-24 flex justify-start items-end z-0">
			<svelte:component this={service?.icon} classNames="text-primary h-16" />

			<div class="absolute top-0 left-0 z-00">
				<ServiceCardBlob classNames="text-gray-10 dark:text-gray-dark" />
			</div>
		</div>
	{/if}

	<h4 class="h4 mt-12">{service?.title}</h4>
	<p class="mb-4">{service?.description}</p>
</div>
