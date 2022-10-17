import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Head from "next/head";
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

const basePrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<Head>
				<link rel="shortcute icon" href={basePrefix+ "/favicon.png"} />
			</Head>
			<SEO
				data={{
					title: "Yatharth Vyas",
					description:
						"Writing code to help people.",
					image: "https://media-exp1.licdn.com/dms/image/C4D03AQEo6xOfO_wsTw/profile-displayphoto-shrink_800_800/0/1663132602828?e=1671667200&v=beta&t=gy-enZnCz_ZaLZxQqAOeS9ZA1cxtn8IOrORKiDUL14A",
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
			{/* <hr style={{width: "60%", marginLeft: "20%"}} />
			<Proficiency /> */}
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
