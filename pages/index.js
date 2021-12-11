import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Yatharth Vyas",
					description:
						"Writing code to help people.",
					image: "https://lh3.googleusercontent.com/ogw/ADea4I7sm8tDWGQ_S5qcD6LLLqIQpj13nLmvc2tDyXeb4A=s192-c-mo",
					url: "https://yatharthvyas.github.io/",
					keywords: [
						"Yatharth Vyas",
						"Yatharth",
						"@YatharthVyas",
						"YatharthVyas",
						"Portfolio",
						"Yatharth Vyas Portfolio ",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"flask",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"reactnative",
						"google summer of code",
						"gsoc"
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
