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

<div class="pr-6 pb-6 md:w-1/2">
	<div
		class={`p-[30px] bg-white rounded-[20px] ${index === 3 && '-mt-56 xl:-mt-48'}`}
		style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
	>
		<img src={item?.image} alt="" />

		<div>
			<span class="text-[#7e7e8a] text-lg leading-none inline-block mt-7 mb-5"
				>{item?.category}</span
			>
			<h3 class="h3 !mb-0">{item?.title}</h3>

			<a href={`/portfolio/${item.slug}`} class="text-[#400080] relative ml-[30px] vertical-bar"
				>See Details</a
			>
		</div>
	</div>
</div>
