import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = ({ colors }) => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes colors={colors} />
			</BrowserRouter>
		</div>
	);
};

App.defaultProps = {
	colors: [
		{
			id: 1,
			color: "hotpink"
		},
		{
			id: 2,
			color: "lavender"
		},
		{
			id: 3,
			color: "salmon"
		},
		{
			id: 4,
			color: "lemonchiffon"
		}
	]
};
export default App;
