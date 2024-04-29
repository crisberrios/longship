export { LayoutDefault };
import { Container } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { HeaderMegaMenu } from "../components/header/HeaderMegaMenu";
import "@mantine/core/styles.css";

function LayoutDefault({ children }: { children: React.ReactNode }) {
	return (
		<MantineProvider>
			<Notifications />
			<Container py="md" fluid>
				<HeaderMegaMenu />
				{children}
			</Container>
		</MantineProvider>
	);
}
