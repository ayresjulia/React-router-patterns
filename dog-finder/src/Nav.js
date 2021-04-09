import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

const Nav = ({ dogs }) => {
	return (
		<Navbar color="light">
			<NavLink to={"/dogs"}>Home</NavLink>
			{dogs.map((dog) => (
				<NavLink key={dog.name} to={`/dogs/${dog.name}`}>
					{dog.name}
				</NavLink>
			))}
		</Navbar>
	);
};

export default Nav;
