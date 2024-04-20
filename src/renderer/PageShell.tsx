import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import "./PageShell.css";
import { Link } from "./Link";
import { ComponentChildren } from "preact";
import { VikeContext } from "../types";

export { PageShell };

const PageShell = function ({
	children,
	pageContext,
}: {
	children: ComponentChildren;
	pageContext: VikeContext;
}) {
	return (
		<PageContextProvider pageContext={pageContext}>
			<Layout>
				<Sidebar>
					<Logo />
					<Link className="navitem" href="/">
						Home
					</Link>
					<Link className="navitem" href="/about">
						About
					</Link>
					<Link className="navitem" href="/suspense-example">
						Suspense Example
					</Link>
				</Sidebar>
				<Content>{children}</Content>
			</Layout>
		</PageContextProvider>
	);
};

const Layout = function ({ children }: { children: ComponentChildren }) {
	return (
		<div
			style={{
				display: "flex",
				maxWidth: 900,
				margin: "auto",
			}}
		>
			{children}
		</div>
	);
};

const Sidebar = function ({ children }: { children: ComponentChildren }) {
	return (
		<div
			style={{
				padding: 20,
				flexShrink: 0,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				lineHeight: "1.8em",
			}}
		>
			{children}
		</div>
	);
};

const Content = function ({ children }: { children: ComponentChildren }) {
	return (
		<div
			id="page-content"
			style={{
				padding: 20,
				paddingBottom: 50,
				borderLeft: "2px solid #eee",
				minHeight: "100vh",
			}}
		>
			{children}
		</div>
	);
};

function Logo() {
	return (
		<div
			style={{
				marginTop: 20,
				marginBottom: 10,
			}}
		>
			<a href="/">
				<img src={logo} height={64} width={64} alt="logo" />
			</a>
		</div>
	);
}
