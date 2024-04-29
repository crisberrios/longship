export default Page;

import { Box } from "@mantine/core";
import { Counter } from "./Counter";

function Page() {
	return (
		<Box>
			<h1>Welcome</h1>
			This page is:
			<ul>
				<li>Rendered to HTML.</li>
				<li>
					Interactive. <Counter />
				</li>
			</ul>
		</Box>
	);
}
