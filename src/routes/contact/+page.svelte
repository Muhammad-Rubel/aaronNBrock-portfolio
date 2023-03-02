<script lang="ts">
	import ServiceCardBlob from '$lib/components/Homepage/ServiceCardBlob.svelte';
	import Clock from '$lib/components/Svg/Clock.svelte';
	import Figure from '$lib/components/Svg/Figure.svelte';
	import LocationOutline from '$lib/components/Svg/LocationOutline.svelte';
	import Phone from '$lib/components/Svg/Phone.svelte';
	import BackgroundShape from '$lib/components/Svg/service/BackgroundShape.svelte';

	const contactOptions = [
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

<div class="pt-32">
	<!-- section One -->
	<section class="relative">
		<div class="absolute top-[15%] -left-[7%] transform z-0 hidden lg:block contact_svg">
			<Figure classNames="h-[201px] w-[201px]" />
		</div>

		<div class="hidden lg:block absolute top-[15%] right-[10%] transform z-0 move_top">
			<Figure classNames="h-[100px] w-[100px]" />
		</div>

		<div class="hidden lg:block absolute top-[6%] right-[2%] transform z-[-1]">
			<BackgroundShape classNames="h-[200px] w-[200px]" />
		</div>

		<div class="container relative">
			<h3 class="h1 text-center">Contacts</h3>
			<p class="text-center">Home</p>

			<!-- contact options -->
			<div
				class="py-[50px] lg:py-[100px] space-y-8 lg:flex justify-between items-start lg:space-y-0 lg:space-x-8"
			>
				{#each contactOptions as item}
					<div
						class="p-[30px] bg-white rounded-[20px] mb-4 w-full"
						style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
					>
						<!-- render icon -->
						{#if item.icon}
							<div class="mb-4 relative h-[125px] w-[100px] flex justify-start items-end z-0">
								<svelte:component this={item.icon} classNames="h-16 text-primary" />

								<div class="absolute top-0 left-0 z-[-1]">
									<ServiceCardBlob />
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

	<!-- section Two -->
	<section class="pt-[50px] pb-[100px] relative">
		<div class="container space-y-16 lg:space-y-0 lg:grid grid-cols-2 lg:gap-x-[30px]">
			<!-- contact form -->
			<div>
				<h3 class="h3">Contact Form</h3>

				<form action="" class="w-full space-y-[30px]">
					<div class="space-y-[30px]">
						<input type="text" placeholder="Name" required class="input" />
						<input type="email" placeholder="Email" required class="input" />
					</div>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						required
						placeholder="Message"
						class="input h-48"
					/>

					<!-- checkbox -->
					<div class="flex items-start space-x-2 w-full">
						<input type="checkbox" id="checkbox" />
						<label for="checkbox" class="text-[#495057] -mt-1.5 text-base"
							>I agree that my submitted data is being collected and stored.</label
						>
					</div>
					<button type="submit" class="btn primary-btn btn-zoom">Send Message</button>
				</form>
			</div>

			<!-- empty div -->
			<div class="h-[400px] lg:h-full bg-[#E5E3DF] rounded-[20px]" />
		</div>
	</section>
</div>

<style>
	.input {
		@apply w-full py-1.5 px-3 text-[#495057] bg-white border border-[#ced4da] rounded transition-all duration-150 ease-in-out;
	}

	.input:focus {
		@apply outline-none border-[#8001ff];
		box-shadow: 0 0 0 0.2rem rgb(64 0 128 / 25%);
	}

	.contact_svg {
		animation: contact_svg_move_top 5s infinite linear;
	}

	@keyframes contact_svg_move_top {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(15px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
