import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("/dogs route", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={[ "/dogs" ]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Home")).toBeInTheDocument();
});
