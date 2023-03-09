<script lang="ts">
	import SkillImage from '$lib/assets/images/skill/skill_image.jpg';
	import SkillMask from '$lib/assets/images/skill/skill-mask-svg.svg';
	import Check from '../Svg/Check.svelte';
	import Figure from '../Svg/Figure.svelte';
	import SkillBlob from '../Svg/Homepage/Skill/SkillBlob.svelte';
	import FigureSmall from '../Svg/FigureSmall.svelte';

	const skills: string[] = [
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
		class="container py-12 lg:pt-20 lg:pb-24 xl:pt-24 xl:pb-36 lg:grid grid-cols-2 items-center gap-x-16 space-y-8 lg:space-y-0"
	>
		<div class="relative">
			<!-- <img src={SkillImage} alt="" /> -->
			<img
				src={SkillImage}
				alt=""
				class=""
				style="-webkit-mask:url({SkillMask});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
			/>

			<div class="absolute -top-[11%] -left-[17%] transform z-0 animate-move-top">
				<Figure classNames="h-36 w-36" />
			</div>
		</div>

		<div class="">
			<span class="top-title pre-line-top-title">My Skills</span>
			<h2 class="h2 mt-4">What's my Skillset?</h2>
			<p class="mb-4">
				I'll be honest, this section here is just the "buzzword bingo" that I play with the search
				engines. (Also, can you find the two pokeimon?)
			</p>

			<div class="grid grid-cols-3">
				{#each skills as skill}
					<span class="flex justify-start items-center space-x-2 p-1 border-t border-gray-5">
						<Check classNames="h-5 w-5 text-primary fill-current" />
						<span class="text-xl leading-normal">{skill}</span>
					</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="hidden lg:block absolute bottom-[5%] right-[10%] transform z-0 animate-move-top">
		<FigureSmall classNames="h-24 w-24" />
	</div>

	<div class="hidden lg:block absolute bottom-[2%] right-[2%] transform z-00">
		<SkillBlob classNames="h-72 w-72" />
	</div>
</section>
