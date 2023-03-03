import type { ComponentType } from 'svelte';

export interface IImage {
	src: string;
	alt: string;
}

export interface INavItem {
	name: string;
	href: string;
}

export interface IBlog {
	slug: string;
	image: IImage;
	title: string;
	date: string;
}

export interface IPortfolio {
	slug: string;
	category: string;
	title: string;
	image: IImage;
}

export interface IResumeSectionItem {
	title: string;
	description: string;
	date: string;
}

export interface IResumeSection {
	title: string;
	items: IResumeSectionItem[];
}

export interface IService {
	title: string;
	description: string;
	icon: ComponentType;
}

export interface ITestimonial {
	name: string;
	comment: string;
	time: string;
	star: number;
}

export interface ISocialMediaLink {
	url: string;
	icon: ComponentType;
}

export interface IContactOption {
	icon: ComponentType;
	title: string;
	description: string;
}
