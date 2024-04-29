// Import the necessary modules
import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Page from "./+Page";
import { MantineProvider } from "@mantine/core";

// Define the test
test("renders Page component", () => {
	render(
		<MantineProvider>
			<Page />
		</MantineProvider>,
	);

	// Check if the "Welcome" header is present
	const headerElement = screen.getByText(/Welcome/i);
	expect(headerElement).not.toBeNull();

	// Check if the "Rendered to HTML." list item is present
	const listItem1 = screen.getByText(/Rendered to HTML./i);
	expect(listItem1).not.toBeNull();

	// Check if the "Interactive." list item is present
	const listItem2 = screen.getByText(/Interactive./i);
	expect(listItem2).not.toBeNull();
});
