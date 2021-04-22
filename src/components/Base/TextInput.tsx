import React from "react";
import { appendCssClass } from "../../utils/reactUtils";

export interface ITextInputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	value: string;
	setValue: any;
	additionalHandler?: (value: string) => void;
}

export const TextInput: React.FC<ITextInputProps> = ({
	value,
	setValue,
	className,
	additionalHandler,
	...rest
}) => {
	const composedClassName = appendCssClass("text-input", className);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		if (additionalHandler) {
			additionalHandler(e.target.value);
		}
	};

	return (
		<input
			{...rest}
			type="text"
			onChange={handleChange}
			value={value}
			className={composedClassName}
		/>
	);
};
