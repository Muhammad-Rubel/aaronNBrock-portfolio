<script lang="ts">
	import type { IResumeSection } from '$lib/types/generalTypes';

	enum ActiveTab {
		Achievements = 'Achievements',
		Experience = 'Experience'
	}

	let currentTab: ActiveTab = ActiveTab.Achievements;

	const resume: IResumeSection[] = [
		{
			title: 'Achievements',
			items: [
				{
					title: 'GCP Professional Cloud Architect',
					description:
						'"A Professional Cloud Architect enables organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud Platform, this individual can design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives." ~ Google Cloud',
					date: 'JUN 2020'
				},
				{
					title: 'GCP Associate Cloud Engineer',
					description:
						'"An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. This individual is able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud." ~ Google Cloud',
					date: 'NOV 2018'
				},
				{
					title: 'Eagle Scout',
					description:
						'"Since 1912, the Eagle Scout rank has represented a milestone of accomplishment—perhaps without equal—that is recognized across the country and even the world." ~ Scouting.org',
					date: 'NOV 2018'
				}
			]
		},
		{
			title: 'Experience',
			items: [
				{
					title: 'Technical Presales Engineer, SADA',
					description:
						'Prototype and lead the deployment of scalable Google Cloud Platform (GCP) architectures',
					date: 'NOV 2020 - PRESENT'
				},
				{
					title: 'DevOps Consultant, Contino',
					description:
						'Lead transformations which helped large, heavily-regulated enterprises become fast, agile and competitive.',
					date: 'SEP 2019 - NOV 2020'
				},
				{
					title: 'Automation Intern, Soterea',
					description:
						'Automated the data labeling workflow, enabling the creation of consitent well-maintained datasets to power the future of safe self-driving cars.',
					date: 'JUN 2019 - AUG 2019'
				},
				{
					title: 'DevOps Engineer, iconectiv',
					description:
						'Facilitated the adoption of DevOps best Practices, though training & pairing with development teams.',
					date: 'DEC 2017 - MAY 2019'
				},
				{
					title: 'Co-Founder, Soda Hop Media',
					description:
						'Pioneered accessible cloud gaming technology, aiming to revolutionize the way humans interact with computers.',
					date: 'OCT 2016 - JAN 2017'
				},
				{
					title: 'Contract Consultant, various Minecraft Servers',
					description:
						'Honed my development skills across many different teams during the boom of Minecraft.',
					date: 'OCT 2016 - JAN 2017'
				}
			]
		}
	];

	const setActiveTab = (tab: ActiveTab) => {
		currentTab = tab;
	};
</script>

<section id="resume" class="relative py-[50px] md:py-[100px] lg:py-[150px]">
	<div class="bg-[#1b2031] absolute top-0 left-0 right-0 bottom-0 transform -skew-y-2 z-[-1]" />

	<div class="container lg:flex justify-between items-start gap-x-6 relative">
		<div class="text-light lg:pr-20 lg:!sticky !top-48 w-full">
			<span class="top-title !text-light pre-line-top-title before:bg-light">Resume</span>
			<h2 class="h2">Experiences.</h2>
			<p class="mb-4">
				What? You don’t want to just take my word for it that I know what I’m talking about? I guess
				some healthy scepticism is a good thing.
			</p>

			<div class="flex justify-between items-center mt-12">
				<button
					class="btn primary-btn !rounded-r-none w-full"
					on:click={() => setActiveTab(ActiveTab.Achievements)}>Achievements</button
				>
				<button
					class="btn primary-btn-alt !rounded-l-none w-full"
					on:click={() => setActiveTab(ActiveTab.Experience)}>Experience</button
				>
			</div>
		</div>

		<div class="mt-8 space-y-[30px] w-full">
			{#each resume as section}
				{#if section.title === currentTab}
					{#each section.items as item}
						<div class="bg-white p-[30px] rounded-[20px]">
							<span
								class="text-xl leading-normal text-[#400080] pre-line-top-title before:bg-[#400080]"
								>{item.date}</span
							>
							<h4 class="mt-5 mb-6 text-2xl md:text-3xl leading-[1.2] font-semibold">
								{item.title}
							</h4>
							<p class="text-xl leading-normal">{item.description}</p>
						</div>
					{/each}
				{/if}
			{/each}
		</div>
	</div>
</section>
