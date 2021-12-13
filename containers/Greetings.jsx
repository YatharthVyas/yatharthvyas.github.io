import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		const script = document.createElement("script");
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js";
		script.async = true;
		script.onload = () => {
			var textWrapper = document.querySelector('.ml11 .letters');
			textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

			window.anime.timeline({loop: false})
			.add({
				targets: '.ml11 .line',
				scaleY: [0,1],
				opacity: [0.5,1],
				easing: "easeOutExpo",
				duration: 700
			})
			.add({
				targets: '.ml11 .line',
				translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
				easing: "easeOutExpo",
				duration: 700,
				delay: 100
			}).add({
				targets: '.ml11 .letter',
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 600,
				offset: '-=775',
				delay: (el, i) => 34 * (i+1)
			}).add({
				targets: '.line',
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000
			});


			var textWrappers = document.querySelector('.ml2');
			textWrappers.innerHTML = textWrappers.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

			window.anime.timeline({loop: false})
			.add({
			targets: '.ml2 .letter',
			scale: [4,1],
			opacity: [0,1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 950,
			delay: (el, i) => 70*i
			});
		}
	document.body.appendChild(script);
	},[]);
	return (
		<main>
			<div className="position-relative">
				<section className="section section-lg section-shaped pb-250">
					<div className="shape shape-style-1 bg-gradient-info">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Row>
								<Col lg="6">
									<div className="text-white" style={{marginTop: 80}}>
										<h1 className="ml2">Yatharth Vyas</h1>
									</div>
									<div className="lead text-white">

									<h6 className="ml11">
										<span className="text-wrapper">
											<span className="line line1"></span>
											<span className="letters text-white">{greetings.description}</span>
										</span>
									</h6>
										
									</div>
									<SocialLinks />
									<div className="btn-wrapper my-4">
										<Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											color="default"
											href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<i className="fa fa-file" />
											</span>
											<span className="btn-inner--text">
												See My Resume
											</span>
										</Button>
									</div>
								</Col>
								<Col lg="6">
									<GreetingLottie animationPath="/lottie/coding.json" />
								</Col>
							</Row>
						</div>
					</Container>
					{/* SVG separator */}
					<div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
				</section>
				{/* 1st Hero Variation */}
			</div>
		</main>
	);
};

export default Greetings;
