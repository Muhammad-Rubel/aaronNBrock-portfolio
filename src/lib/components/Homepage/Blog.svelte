<script lang="ts">
	import type { IBlog } from '$lib/types/generalTypes';
	import Blog1 from '$lib/assets/images/blog/person-reaching-out-to-robot.jpg';
	import Blog2 from '$lib/assets/images/allPost/turtles-all-the-way-down.jpeg';
	import Blog3 from '$lib/assets/images/allPost/allPost-6.jpg';
	import BlogBlob from '$lib/components/Svg/Homepage/Blog/BlogBlob.svelte';

	const blogPosts: IBlog[] = [
		{
			slug: 'Optimal-dating-strategy',
			image: {
				src: Blog1,
				alt: ''
			},
			title: 'Optimal Dating Strategy',
			date: 'February 13, 2023'
		},
		{
			slug: 'docker-in-docker-in-docker-in...',
			image: {
				src: Blog2,
				alt: ''
			},
			title: 'Docker in Docker in Docker in...',
			date: 'September 13, 2020'
		},
		{
			slug: 'markdown-dormatting-demo',
			image: {
				src: Blog3,
				alt: ''
			},
			title: 'Markdown Formatting Demo',
			date: 'September 13, 2020'
		}
	];
</script>

<section id="blog" class="py-20 md:py-12 xl:py-24 relative">
	<div class="container z-10 relative">
		<div class="lg:flex justify-between items-end">
			<div>
				<span class="top-title pre-line-top-title">Blog</span>
				<h2 class="h2 mt-4">Recent Article</h2>
				<p class="mb-4">Just a place for my thoughts...</p>
			</div>

			<div class="hidden lg:block">
				<button
					class="btn text-secondary border border-secondary hover:border-secondary hover:bg-secondary active:border-secondary active:bg-secondary hover:text-white active:text-white"
					>See All Posts</button
				>
			</div>
		</div>

		<div
			class="mt-12 lg:flex justify-between items-start space-y-36 lg:space-y-0 lg:space-x-8 pb-36 lg:pb-0"
		>
			{#each blogPosts as post}
				<div class="group w-full relative">
					<a href="/">
						<div>
							<div class="rounded-20 overflow-hidden w-4/5 mx-auto lg:w-[90%] lg:ml-0">
								<img
									src={post.image.src}
									alt={post.image.alt}
									class="transform group-hover:scale-110 transition-all duration-300 ease-in-out w-full"
								/>
							</div>
						</div>

						<div
							class="bg-white p-8 absolute -bottom-24 left-0 md:left-10 lg:right-0 rounded-20 dark:bg-gray"
							style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
						>
							<span class="text-primary text-base pre-line-top-title">{post.date}</span>
							<h5 class="h5 mt-5 mb-0">{post.title}</h5>
						</div>
					</a>
				</div>
			{/each}
		</div>

		<div class="lg:hidden flex justify-center mt-8">
			<button
				class="btn text-secondary border border-secondary hover:border-secondary hover:bg-secondary active:border-secondary active:bg-secondary hover:text-white active:text-white"
				>See All Posts</button
			>
		</div>
	</div>

	<div class="absolute top-[11%] right-[12%] z-0">
		<BlogBlob classNames="h-72 w-72 text-gray-10" />
	</div>
</section>
