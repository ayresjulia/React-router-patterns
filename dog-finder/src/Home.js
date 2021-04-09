import React from "react";
import "./Home.css";
import { Card, CardImg, CardTitle } from "reactstrap";

const Home = ({ dogs }) => {
	return (
		<div className="Dogs-body">
			{dogs.map((dog) => (
				<Card className="Dogs" key={dog.name}>
					<CardImg top width="100%" className="Card-img" src={dog.src} alt="" />
					<CardTitle tag="h5">{dog.name}</CardTitle>
				</Card>
			))}
		</div>
	);
};

export default Home;
