import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Color from "./Color";
import Home from "./Home";
import NewColorForm from "./NewColorForm";

const Routes = ({ colors }) => {
	const [ colorsState, setColorsState ] = useState(colors);

	const addColor = (newColor) => {
		setColorsState((colors) => [ ...colors, { ...newColor, id: uuid() } ]);
	};

	return (
		<Switch>
			<Route exact path="/colors/newcolor">
				<NewColorForm addColor={addColor} />
			</Route>
			<Route exact path={"/colors/:color"}>
				<Color colors={colorsState} />
			</Route>
			<Route exact path="/colors">
				<Home colors={colorsState} />
			</Route>
			<Redirect to="/colors" />
		</Switch>
	);
};

export default Routes;
