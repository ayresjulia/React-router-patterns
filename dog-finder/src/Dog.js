import React from "react";
import "./Dog.css";
import { useParams, Redirect } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Dog = ({ dogs }) => {
	const { name } = useParams();
	const allNames = dogs.map((dog) => dog.name);
	if (allNames.indexOf(name) === -1) return <Redirect to="/dogs" />;

	let findDog = dogs.find((dog) => dog.name === name);

	return (
		<div className="Card" key={findDog.name}>
			<Card>
				<CardImg top width="100%" src={findDog.src} alt="" />
				<CardBody>
					<CardTitle tag="h5">Name: {findDog.name}</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						Age: {findDog.age}
					</CardSubtitle>
					{findDog.facts.map((fact) => <CardText>{fact}</CardText>)}
				</CardBody>
			</Card>
		</div>
	);
};

export default Dog;
