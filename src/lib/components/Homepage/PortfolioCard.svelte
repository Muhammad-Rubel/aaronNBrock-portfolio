<script lang="ts">
	import type { IPortfolio } from '$lib/types/generalTypes';

	export let item: IPortfolio;
	export let index: number;
</script>

<div class="mb-8 md:m-6">
	<a href="/">
		<div class={`group ${index === 3 && 'md:-mt-44 lg:-mt-56 xl:-mt-64'}`}>
			<img
				src={item?.image?.src}
				alt={item?.image?.alt}
				class="rounded-20 w-full group-hover:shadow-xl transition-all duration-300"
			/>

			<div class="overflow-hidden">
				<span class="text-gray text-lg leading-none inline-block mt-7 mb-5 dark:text-light"
					>{item?.category}</span
				>
				<h3 class="h3 !mb-0">{item?.title}</h3>

				<span
					class="text-primary relative ml-8 pre-line-top-title before:!bg-primary xl:inline-block xl:transform translate-y-20 xl:translate-x-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
				>
					See Details
				</span>
			</div>
		</div>
	</a>
</div>
