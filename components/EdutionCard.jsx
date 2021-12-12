import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import Tilt from 'react-tilt'
import { Fade } from "react-reveal";


const EdutionCard = ({ education }) => {
	return (
		<Fade left duration={1000} distance="40px">
			<Tilt className="Tilt" options={{ max : 25 }} >
			<Card className="shadow mt-4">
				<CardBody>
					<div className="d-flex px-2">
						<div className="pl-2">
							<h5 className="text-info">
								{education.schoolName}
							</h5>
							<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							<p className="description mt-3">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
			</Tilt>
		</Fade>
	);
};

export default EdutionCard;
