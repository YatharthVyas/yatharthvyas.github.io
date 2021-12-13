import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-2">
							<div className="pl-3">
								<h3>{data.name}</h3>
								{data.stacks?.map((stack, index) => (
									<span key={index} className="badge badge-pill badge-secondary mr-2" style={{textTransform: "none"}}>
										{stack}
									</span>
								))}
								<p className="description mt-3">{data.desc}
								<ul style={{listStyleType: "square", marginLeft: -10}}>
									{data.descBullets?.map((bullet, index) => (
										<li key={index}>{bullet}</li>
									))}
								</ul>
								</p>
								{data.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.link}
										target="_blank"
										rel="noopener"
										aria-label="Github"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
								{data.link ? (
									<Button
										className="btn-icon"
										color="success"
										href={data.link}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-arrow-right mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Demo
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
