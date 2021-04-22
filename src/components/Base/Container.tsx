import React from "react";
import { appendCssClass } from "../../utils/reactUtils";

export const Container: React.FC<
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
	const composedClassName = appendCssClass("container", className);
	return (
		<div {...rest} className={composedClassName}>
			{children}
		</div>
	);
};
