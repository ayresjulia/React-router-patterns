import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import "./Color.css";

const Color = ({ colors }) => {
	const { color } = useParams();
	const allColors = colors.map((c) => c.color);
	if (allColors.indexOf(color) === -1) return <Redirect to="/colors" />;
	let findColor = colors.find((c) => c.color === color);

	return (
		<div className="Card" key={findColor.id} style={{ backgroundColor: `${findColor.color}` }}>
			This is {findColor.color}!!!<p>
				<Link to="/colors" className="btn btn-secondary">
					Go Back
				</Link>
			</p>
		</div>
	);
};

export default Color;
