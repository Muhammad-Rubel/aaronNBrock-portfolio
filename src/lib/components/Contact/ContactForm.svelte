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

<style>
	.input {
		@apply w-full py-1.5 px-3 text-[#495057] bg-white border border-[#ced4da] rounded transition-all duration-150 ease-in-out;
	}

	.input:focus {
		@apply outline-none border-[#8001ff];
		box-shadow: 0 0 0 0.2rem rgb(64 0 128 / 25%);
	}
</style>
