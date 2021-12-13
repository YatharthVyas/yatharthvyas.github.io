import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="4" style={{height: "100% !important"}}>
			<Fade left duration={1000} distance="40px" style={{height: "100% !important"}}>
				<Card
					className="shadow-lg--hover shadow border-0 text-center rounded"
					style={{ flex: 1, height: "100% !important" }}
				>
					<Color src={process.env.NEXT_PUBLIC_BASE_PATH + data.companylogo} format="hex">
						{(color) => (
							<CardHeader style={{ background: color.data }}>
								<h5 className={data.company.includes("NK Learnicare") ? "" : "text-white"}>{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
					<div display="flex" style={{flexDirection: "row"}}>
						<span
							className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px", flex: 1 , display: "inline-block" }}
						>
							<img
								src={process.env.NEXT_PUBLIC_BASE_PATH + data.companylogo}
								width={"100px"}
								height={"100px"}
								alt={data.company}
							/>
						</span>

						{data.companylogo2 &&
						<span
							className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px", flex: 1, display: "inline-block", marginLeft: "10px" }}
						>
							<img
								src={process.env.NEXT_PUBLIC_BASE_PATH + data.companylogo2}
								width={"100px"}
								height={"100px"}
								alt={data.company}
							/>
							</span>
}
							</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}  dangerouslySetInnerHTML={{ __html: desc}}></li>;
									  })
									: null}
							</ul>
							{data.company.includes("Joomla") && <div>Know more about my work by visiting <u><a href="https://github.com/joomla-projects/gsoc21_core-enhancements/blob/GSoC-21-readme/README_GSoC.md">here</a></u></div>}

						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
