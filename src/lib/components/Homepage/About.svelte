<script>
	import AboutImage from '$lib/assets/images/about/about.jpg';
</script>

<section class="py-[50px] lg:py-[78px] xl:py-[100px]">
	<div class="container">
		<!-- heading -->
		<div>
			<span class="text-xl leading-normal text-center text-gray-dark mb-4 inline-block w-full"
				>About About</span
			>
			<h2 class="text-5xl leading-[1.2] mb-6 font-semibold text-center">About About About</h2>
			<p class="text-xl leading-[1.5] mb-16 text-center">About About About About About</p>
		</div>

		<!-- content -->
		<div>
			<!-- image -->
			<div>
				<img src={AboutImage} alt="" />
			</div>

			<!-- text -->
			<div class="bg-[#1b2031] mt-[30px] rounded-[20px] p-6">
				<h3 class="text-light text-3xl lg:text-[2.625rem] leading-[1.2] font-semibold mb-6">
					Mission Statement
				</h3>
				<p class="text-xl leading-normal text-light mb-6">
					As a the leader in <a href="/">Google Cloud memes</a>, I know a thing or two about both
					communicating Google Cloud concepts and building applications on the platform. As a self
					proclaimed fan boy also, I keep up-to-date with Google’s newest offerings so you don’t
					have to. My goal is to streamline your GCP usage so you can fosus on what matters: growing
					your business.
				</p>

				<div class="space-x-7 pb-4">
					<a href="/contact" class="btn primary-btn btn-zoom inline-block">Contact me</a>
					<a href="/" class="btn btn-zoom btn-outline-light inline-block">Let's Chat</a>
				</div>
			</div>
		</div>
	</div>
</section>
