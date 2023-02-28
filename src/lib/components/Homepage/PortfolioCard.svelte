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
			<h4 class="mb-6 text-4xl font-semibold leading-[1.2]">{item?.category}</h4>
			<p class="mb-4 text-xl leading-normal">{item?.title}</p>

			<a href={`/portfolio/${item.slug}`}>See Details</a>
		</div>
	</div>
</div>
