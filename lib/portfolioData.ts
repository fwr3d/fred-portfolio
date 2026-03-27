export type Project = {
	name: string;
	description: string;
	techStack: string[];
	liveUrl?: string;
	githubUrl?: string;
	whatILearned?: string;
};

export const SITE = {
	name: 'Fred',
	headline: "Software developer building web apps and UI.",
	about:
		"I build web apps with JavaScript and TypeScript, mostly using React and Next.js. I care about clean UI, smooth interactions, and code that is easy to maintain. I’m looking for internship or freelance opportunities where I can ship real features and keep improving as an engineer.",
	email: "federicobarroc@gmail.com",
	github: "https://github.com/fwr3d",
	linkedin: "",
};

export const PROJECTS: Project[] = [
	{
		name: "Draft Room",
		description: "A fantasy football draft room app with player browsing, search, and a mock draft flow.",
		techStack: ["JavaScript", "React", "HTML", "CSS"],
		liveUrl: "https://fwr3d.github.io/draftroom/",
		githubUrl: "https://github.com/fwr3d/draftroom",
		whatILearned: "Organizing UI flows into pages and managing a larger front-end data set.",
	},
	{
		name: "Midas Pad",
		description: "A modern web notepad with autosave, search, keyboard shortcuts, and local storage persistence.",
		techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
		githubUrl: "https://github.com/fwr3d/Midas-Pad",
		whatILearned: "Building a responsive CRUD UI with local persistence and good UX details.",
	},
	{
		name: "ExCalender",
		description: "A clean calendar app with event management, holiday presets, and local storage persistence.",
		techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
		githubUrl: "https://github.com/fwr3d/ExCalender",
		whatILearned: "Implementing a calendar UI and editing flows while keeping the UI simple.",
	},
];