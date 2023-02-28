<script>
	import Blog1 from '$lib/assets/images/blog/person-reaching-out-to-robot.jpg';
	import Blog2 from '$lib/assets/images/allPost/turtles-all-the-way-down.jpeg';
	import Blog3 from '$lib/assets/images/allPost/allPost-6.jpg';

	const blogPosts = [
		{
			slug: 'Optimal-dating-strategy',
			image: Blog1,
			title: 'Optimal Dating Strategy',
			date: 'February 13, 2023'
		},
		{
			slug: 'docker-in-docker-in-docker-in...',
			image: Blog2,
			title: 'Docker in Docker in Docker in...',
			date: 'September 13, 2020'
		},
		{
			slug: 'markdown-dormatting-demo',
			image: Blog3,
			title: 'Markdown Formatting Demo',
			date: 'September 13, 2020'
		}
	];
</script>

<section id="blog" class="py-[50px] lg:pt-[100px] lg:pb-[275px]">
	<div class="container">
		<div class="lg:flex justify-between items-end">
			<div>
				<span class="top-title">Blog</span>
				<h2 class="text-[3.375rem] font-semibold leading-[1.2] mb-6">Recent Article</h2>
				<p class="mb-4 text-xl leading-normal">Just a place for my thoughts...</p>
			</div>

			<div class="hidden lg:block">
				<button class="btn btn-outline-secondary">See All Posts</button>
			</div>
		</div>

		<div
			class="mt-12 lg:flex justify-between items-start space-y-36 lg:space-y-0 lg:space-x-8 pb-36 lg:pb-0"
		>
			{#each blogPosts as post}
				<div class="group w-full relative">
					<div>
						<div
							class="rounded-[20px] overflow-hidden w-[90%] md:w-[80%] md:mx-auto lg:w-[90%] lg:ml-0"
						>
							<img
								src={post.image}
								alt=""
								class="transform group-hover:scale-110 custom-transition w-full"
							/>
						</div>
					</div>

					<div
						class="bg-white p-[30px] absolute bottom-[-100px] left-0 md:left-10 right-0 md:right-auto lg:right-0 rounded-[20px]"
						style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
					>
						<span class="text-[#400080] text-base">{post.date}</span>
						<h5 class="mt-5 text-xl md:text-3xl leading-[1.2] font-semibold">
							<a href="#!">{post.title}</a>
						</h5>
					</div>
				</div>
			{/each}
		</div>

		<div class="lg:hidden flex justify-center mt-8">
			<button class="btn btn-outline-secondary">See All Posts</button>
		</div>
	</div>
</section>
