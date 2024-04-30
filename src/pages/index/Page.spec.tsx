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
	const headerElement = screen.getByText(/fully featured/i);
	expect(headerElement).not.toBeNull();
});
