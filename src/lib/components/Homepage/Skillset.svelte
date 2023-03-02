<script lang="ts">
	import SkillImage from '$lib/assets/images/skill/skill_image.jpg';
	import SkillMask from '$lib/assets/images/skill/skill-mask-svg.svg';
	import Check from '../Svg/Check.svelte';
	import Figure from '../Svg/Figure.svelte';
	import BackgroundShape from '../Svg/Homepage/service/BackgroundShape.svelte';

	const skills = [
		'AWS',
		'GCP',
		'Kubernetes',
		'Terraform',
		'Azurill',
		'Docker',
		'Jenkins',
		'GitHub',
		'Gorebyss',
		'Python',
		'Golang',
		'Java',
		'Javascript',
		'VueJS',
		'Ansible'
	];
</script>

<section id="skill" class="relative">
	<div
		class="container py-[50px] lg:pt-[73px] lg:pb-[97px] xl:pt-[100px] xl:pb-[150px] lg:grid grid-cols-2 items-center gap-x-16 space-y-8 lg:space-y-0"
	>
		<div class="relative">
			<!-- <img src={SkillImage} alt="" /> -->
			<img
				src={SkillImage}
				alt=""
				class=""
				style="-webkit-mask:url({SkillMask});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
			/>

			<div class="absolute -top-[11%] -left-[17%] transform z-0 move_top">
				<Figure classNames="h-[150px] w-[150px]" />
			</div>
		</div>

		<div class="">
			<span class="top-title pre-line-top-title">My Skills</span>
			<h2 class="h2">What's my Skillset?</h2>
			<p class="mb-4">
				I'll be honest, this section here is just the "buzzword bingo" that I play with the search
				engines. (Also, can you find the two pokeimon?)
			</p>

			<div class="grid grid-cols-3">
				{#each skills as skill}
					<span class="flex justify-start items-center space-x-2 p-1 border-t border-[#dee2e6]">
						<Check classNames="h-5 w-5 text-[#400080] fill-current" />
						<span class="text-xl leading-normal">{skill}</span>
					</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="hidden lg:block absolute bottom-[5%] right-[10%] transform z-0 move_top">
		<Figure classNames="h-[100px] w-[100px]" />
	</div>

	<div class="hidden lg:block absolute bottom-[2%] right-[2%] transform z-[-1]">
		<BackgroundShape classNames="h-[300px] w-[300px]" />
	</div>
</section>
