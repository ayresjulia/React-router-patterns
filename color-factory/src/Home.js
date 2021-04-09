import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ({ colors }) => {
	console.log(colors);
	return (
		<div>
			<div>
				<h1>Check out our amazing colors!</h1>
			</div>
			<div className="Colors">
				{colors.map((c) => (
					<div key={c.id} className="Color-box" style={{ backgroundColor: `${c.color}` }}>
						{" "}
						<Link key={c.id} className="Colors-link" to={`/colors/${c.color}`}>
							Click to view
						</Link>
					</div>
				))}
			</div>
			<div>
				<h1>and add your own color here</h1>
				<Link to="/colors/newcolor" className="btn btn-secondary">
					Add
				</Link>
			</div>
		</div>
	);
};

export default Home;
