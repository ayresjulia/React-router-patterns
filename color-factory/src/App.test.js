import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("/colors route", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={[ "/colors" ]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Check out our amazing colors!")).toBeInTheDocument();
});

test("color links", () => {
	const { getByText } = render(
		<MemoryRouter initialEntries={[ "/colors" ]}>
			<App />
		</MemoryRouter>
	);
	expect(getByText("Check out our amazing colors!")).toBeInTheDocument();
	const link = getByText("Add");
	fireEvent.click(link);
	expect(getByText("Pick a color")).toBeInTheDocument();
});
