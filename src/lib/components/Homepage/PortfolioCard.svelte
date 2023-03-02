<script lang="ts">
	interface IPortfolioItem {
		slug: string;
		category: string;
		title: string;
		image: string;
	}

	export let item: IPortfolioItem;
	export let index: number;
</script>

<div class="mb-8 md:m-6">
	<div class={`group ${index === 3 && 'md:-mt-44 lg:-mt-56 xl:-mt-64'}`}>
		<img
			src={item?.image}
			alt=""
			class="rounded-[20px] w-full group-hover:shadow-xl transition-all duration-300"
		/>

		<div class="overflow-hidden">
			<span class="text-[#7e7e8a] text-lg leading-none inline-block mt-7 mb-5"
				>{item?.category}</span
			>
			<h3 class="h3 !mb-0">{item?.title}</h3>

			<a
				href={`/portfolio/${item.slug}`}
				class="text-[#400080] relative ml-[30px] inline-block vertical-bar transform translate-y-20 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
				>See Details</a
			>
		</div>
	</div>
</div>

<style>
</style>
