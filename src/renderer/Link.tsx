import { usePageContext } from "./usePageContext";

export { Link };

const Link = function (props: {
	className?: string;
	href: string;
	children: string;
}) {
	const pageContext = usePageContext();
	const className = [
		props.className,
		pageContext.urlPathname === props.href && "is-active",
	]
		.filter(Boolean)
		.join(" ");
	return <a {...props} className={className} />;
};
