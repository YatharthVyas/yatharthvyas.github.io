import emoji from "react-easy-emoji";

export const greetings = {
	name: "Yatharth Vyas",
	title: "Yatharth Vyas",
	description:
		"I build stuff that people use",
	resumeLink: "https://drive.google.com/file/d/1xr77wY2opAzo9HhHjOcUByeY2Dt1YNUd",
};

export const openSource = {
	githubUserName: "YatharthVyas",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/yatharth.vyas",
	instagram: "https://www.instagram.com/yatharthvyas/",
	twitter: "https://twitter.com/YatharthV2000",
	github: "https://github.com/YatharthVyas",
	linkedin: "https://www.linkedin.com/in/yatharthvyas/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"With the goal of exploring every corner of Computer Science, I am executing an infinite loop of learning:",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS-3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "SASS",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "ReactJs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "ReactNative",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "SQL-Databases",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "MongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "Amazon-Web-Services",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "Firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "Docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "CPP",
			fontAwesomeClassname: "vscode-icons:file-type-cpp",
		},
		{
			skillName: "C",
			fontAwesomeClassname: "vscode-icons:file-type-c",
		},
		{
			skillName: "PHP",
			fontAwesomeClassname: "logos:php",
		},
		{
			skillName: "Joomla",
			fontAwesomeClassname: "logos:joomla",
		},
		{
			skillName: "Rust",
			fontAwesomeClassname: "logos:rust",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		weight: 1,
		schoolName: "Dwarkadas J. Sanghvi College of Engineering",
		subHeader: "Bachelor of Engineering in Computer Science",
		duration: "July 2018 - June 2022",
		desc: "Participated in the research of Distributed Systems & Big Data and published 2 papers.",
		descBullets: [
			"9.83 of 10.00 GPA upto 6th Semester",
			"Lead @ DJ Unicode (tech club).",
			"Mentored 100+ students",
		],
	},
	{
		schoolName: "Sathaye College",
		subHeader: "Higher Secondary School (HSC)",
		duration: "August 2016 - May 2018",
		desc: "Only student to score 100/100 in Mathematics.",
		descBullets: [
			"89.47% Overall",
			"Specialization in Computer Science"
		],
	},
	{
		schoolName: "Lilavatibai Podar School",
		subHeader: "Indian Certificate of Secondary Education (ICSE)",
		duration: "Till April 2016",	
		desc: "Ranked among top 10% in the school.",
		descBullets: [
			"93.80% Best of 5",
			"93.50% Overall"
		],
	},
];

export const experience = [
	{
		role: "Software Engineering Intern",
		company: "Mahamela Tech",
		companylogo: "/img/icons/common/mahamela.jpeg",
		date: "Aug 2021 – Present",
		desc: "Optimized Performance and Developed features for the web and native application for the company using ReactNative, NodeJS, MongoDB, GCloud, Firebase and more.",
		descBullets: [
			"Developed a Bookkeeping Module for seller-customer ledger records and payments",
			"Optimized Logo generation by porting the library used from pupeteer to sharp",
			"Wrote complex SQL queries to substitute ORM calls for user analytics"
		],
	},
	{
		role: "Student Developer",
		company: "Google Summer of Code @ Joomla!",
		companylogo: "/img/icons/common/gsoc.png",
		companylogo2: "/img/icons/common/joomla.png",
		date: "May 2021 – Aug 2021",
		desc: "What began with understanding the existing features of Joomla core phased into me enhancing them. This experience helped me learn the art of reading code and documentation that is overlooked by many. Being a long-established content management system, Joomla is written in legacy technologies which made my job equally challenging and interesting.",
		descBullets: [
			"Introduced 4 enhancements to the Joomla! core",
			"Enhanced the UX of placing modules and selecting their positions.",
			"Implemented workflows for Modules.",
			"Refactored the MVC of Articles and Featured Articles to increase re-usability of components.",
		]
	},
	{
		role: "Fullstack Developer",
		company: "Carte",
		companylogo: "/img/icons/common/carte.png",
		date: "Nov 2020 – March 2021",
		desc: "A contactless dining application for restaurants. The application is built using ReactJs, NodeJS, MongoDB and deployed using AWS.",
		descBullets: [
			"Developed a MERN Stack web application using Material-UI, formik, Pusherjs, and Context API and hosted it on AWS",
			"Key features include QR Codes, Live Order Tracking, Payment Gateway, S3 Storage",
			"Completed the first version of the product in the span of just 40 days and hence was invited to work on the second iteration"
		]
	},
	{
		role: "Web Development Intern",
		company: "NK Learnicare",
		companylogo: "/img/icons/common/nk.jpeg",
		date: "Jan 2015 – Sep 2015",
		desc: "My work was mainly for a sister company, WriteSoft where I made websites for Freelance Clients. I built projects in a team of 4 where I was the FullStack developer.",
		descBullets: [
			"Developed a bulk SMS and email portal with credit system that can be distributed by Merchants to their organization users",
			"Worked in a team of 4, directly reported to the Project Manager, and was a part of the sales Pitches."
		]
	},
];

export const projects = [

	{
		name: "Infant Emotion Detection using Audio Vistual stream",
		stacks: ["Python", "Tensorflow", "Keras", "OpenCV", "CVZone", "Transfer Learning"],
		descBullets: [
			"A multi-modal CNN to predict emotions of infants based on audio characteristics of their cry and a video stream",
			"MFCC is used to extract audio frequencies and is then fed into an ANN.",
			"Images are sampled from a video at 6 frames per second, augmented to increase dataset size and then used to train an ensemble of 6 Convoluted Neural Networks.",
			"A total of 5 unique datasets collected from researchers have been combined for training and testing."
		],
	},

	{
		name: "Simulation of Distributed Architecture on a Single Node using Nodes emulated by Docker",
		stacks: ["Docker", "Rust"],
		descBullets: [
			"Simulation of a multi node system using Linux’s namespaces through containers using Docker.", 
			"Map reduce execution time for word count was optimized from 96s for a single node to 48s for emulated multi-node.",
			"Can be configured to run other related big data algorithms that use a master-slave node architecture."
		],
		github: "https://github.com/YatharthVyas/MapReduce-with-Docker",
	},
	{
		name: "Network Simulator",
		stacks: ["Svelte", "SVG.js", "Vis.js", "JSON"],
		desc: "This is a simple in browser network simulator, which can be used to visualize network graph and run specific logic code on packets.",
		descBullets: [
			"Simulate packet transmission with animations",
			"Implementation of logic and packet queue of any given node is customizable by the user, which means that this can be used to simulate any network algorithm which can be coded using Javascript.",
		],
		link: "https://yjdoc2.github.io/Network-Simulator/",
		github: "https://github.com/YatharthVyas/Network-Simulator",

	}, 
	{
		name: "8086 Emulator Web",
		stacks: ["ReactJs", "Web Assembly", "Rust"],
		descBullets: [
			"Emulates Intel 8086 instruction set and provides an interactive interpreter to run programs in native syntax line by line.",
			"Error reporting & handling, code highlighting, and code execution is supported.",
			"Runs without any backend/server and is completely client-side with zero hosting and maintainance required.",
		],
		link: "https://yjdoc2.github.io/8086-emulator-web/",
		github: "https://github.com/YatharthVyas/8086-emulator-web-1",
	},
	{
		name: "Digit Recognizer",
		stacks: ["Web Assembly", "Rust", "JavaScript", "HTML-Canvas"],
		descBullets: [
			"Neural Network in Rust from scratch and trained over MNIST data, accuracy in the range of 95 to 96%",
			"Compiled the Neural Network in Rust to Web Assembly and implemented a GUI interface to input to the digits drawing using canvas drawing.",
			"The grayscale pixels are pre-processed in frontend, and fed to the Web Assembly for prediction."
		],
		github: "https://github.com/YatharthVyas/Rust-NN-Web-1",
		link: "http://rust-nn-web.herokuapp.com/",
	},
	{
		name: "CodeBook",
		stacks: ["Flask", "Python", "Jinja", "HTML-CSS", "JavaScript", "Bootstrap"],
		descBullets: [
			"Compilation, Execution, and evaluation of user submitted code.",
			"Users can also post questions and solutions to the community",
			"Users can follow other coders and get a personalized feed of their activity",
		],
		github: "https://github.com/YatharthVyas/CodeBook",
	},
];

export const research = [
	{
		name: "Simple Network Simulator",
		feedback:
			"This paper has been accepted by 'IEEE 2022 7th International Conference for Convergence in Technology (I2CT), Pune' which has Ei Compendex and Scopus Indexing. It is about the implementation of a fully customizable network simulator that can be programmed using Javascript and JSON. It is designed to help researchers and professors in teaching concepts of Networks and Cyber Security with animated packet transfer",
	},
	{
		name: "Simulation of a Distributed Architecture on a Single System using Nodes emulated by Docker containers:",
		feedback:
		"I'm a part of a group researching the simulation of a multi-node system using Linux’s namespaces through containers using Docker. Results obtained proved an optimization from 98 seconds on a single node to 45 seconds in a simulated multi-node configuration. The paper for the same is currently under work"
	},
	{
		name: "Emulating Intel's 8086 Microprocessor using Rust and WASM",
		feedback:
		"This study presents various advantages of emulating an 8086 microprocessor using Rust and WASM and describes the technology and architecture involved behind one. The paper is currently under review."
	},
	{
		name: "Infant Emotion Detection using a live audio-visual stream",
		feedback:
		"Currently Ongoing: We are working on a research project to detect emotions of infants. It involves gathering and merging several unique datasets followed by a meticulous process of analysis and interpretation involved due to the sensitive nature of the data."
	}
];
