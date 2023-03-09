<section class="pt-12 pb-24 relative">
	<div class="container space-y-16 lg:space-y-0 lg:grid grid-cols-2 lg:gap-x-8">
		<!-- contact form -->
		<div>
			<h3 class="h3">Contact Form</h3>

			<form action="" class="w-full space-y-8">
				<div class="space-y-8">
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
					<label for="checkbox" class="text-gray-15 -mt-1.5 text-base"
						>I agree that my submitted data is being collected and stored.</label
					>
				</div>
				<button
					type="submit"
					class="btn primary-btn hover:scale-105 hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)]"
					>Send Message</button
				>
			</form>
		</div>

		<!-- empty div -->
		<div class="h-96 lg:h-full bg-gray-10 rounded-20" />
	</div>
</section>

<style lang="scss">
	.input {
		@apply w-full py-1.5 px-3 text-gray-15 bg-white border border-gray-15/40 rounded transition-all duration-150 ease-in-out;
	}

	.input:focus {
		@apply outline-none border-blue-light;
		box-shadow: 0 0 0 0.2rem rgb(64 0 128 / 25%);
	}
</style>
