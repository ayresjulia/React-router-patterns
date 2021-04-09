import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dog from "./Dog";
import Home from "./Home";

function Routes ({ dogs }) {
	return (
		<Switch>
			<Route exact path={"/dogs/:name"}>
				<Dog dogs={dogs} />
			</Route>
			<Route exact path="/dogs">
				<Home dogs={dogs} />
			</Route>
			<Redirect to="/dogs" />
		</Switch>
	);
}

export default Routes;
