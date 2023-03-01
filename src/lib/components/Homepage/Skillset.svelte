<script lang="ts">
	import SkillImage from '$lib/assets/images/skill/skill_image.jpg';
	import Check from '../Svg/Check.svelte';
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
		class="container py-[50px] lg:py-[100px] lg:grid grid-cols-2 items-center gap-x-16 space-y-8 lg:space-y-0"
	>
		<div>
			<img src={SkillImage} alt="" />
		</div>

		<div class="">
			<span class="top-title">My Skills</span>
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
</section>
